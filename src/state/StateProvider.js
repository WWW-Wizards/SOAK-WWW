import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from "react";
import data from "../../assets/data/events.json";

export const UserContext = createContext();

const FILTERS = {
  FAVORITES: "FAVORITES",
  ZONE: "ZONE",
  CAMP: "CAMP",
  TIME: "TIME",
  CATEGORY: "CATEGORY",
  PAST: "PAST"
};

const DAYS = {
  THU: "Thursday",
  FRI: "Friday",
  SAT: "Saturday",
  SUN: "Sunday",
};

const DAY_HEADINGS = {
  THU: "Thursday, May 23rd",
  FRI: "Friday, May 24th",
  SAT: "Saturday, May 25th",
  SUN: "Sunday, May 26th",
};

export function StateProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [menu, setMenu] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    // Check local storage if favorites exist, otherwise initialize an empty array
    const cachedFavorites = localStorage.getItem("favorites");
    return cachedFavorites ? JSON.parse(cachedFavorites) : [];
  });
  const [activeTab, setActiveTab] = useState("THU");
  const [query, setQuery] = useState("");
  const [filterPast, setFilterPast] = useState(true);

  // Handles toggling the filter view between favorited events and all events
  const handleFilterFavorites = (e) => {
    // Prevents toggling the menu accordion when clicking on favorites
    e.stopPropagation();

    // If the favorites filter is already active, unset it (toggle)
    const newFilter = filter === FILTERS.FAVORITES ? "" : FILTERS.FAVORITES;
    setFilter(newFilter);
  };

  // Handles toggling an individual event into or out of the favorites list
  const handleToggleFavorited = (id) => {
    setFavorites((prev) => {
      const prevIndex = prev.findIndex((favorite) => favorite.id === id);

      // Check if the event is already favorited
      // If it is, unfavorite it
      // If it isn't, use its id to look up the corresponding event data and add it to the favorites list
      const newFavorites =
        prevIndex !== -1
          ? prev.filter((favorite) => favorite.id !== id)
          : [...prev, events.find((event) => event.id === id)];

      // Set favorite into local storage
      localStorage.setItem("favorites", JSON.stringify(newFavorites));

      return newFavorites;
    });
  };

  // Returns a string to be used as a classname for conditional styling
  const handleFavoriteDisplay = (id) => {
    const isFavorited = favorites.some((favorite) => favorite.id === id);
    return isFavorited;
  };

  const handleTabClick = (day) => {
    setActiveTab(day);
  };

  const handleSearch = (query) => {
    setQuery(query);
  };

  const date = useMemo(() => DAY_HEADINGS[activeTab], [activeTab]);

  const events = useMemo(() => {
    return data.filter((event) => {
      const filterByFavorites =
        filter === FILTERS.FAVORITES
          ? favorites.some((favorite) => favorite.id === event.id)
          : true;
      const filterByActiveTab = event.day === DAYS[activeTab];
      const filterBySearchQuery = query
        ? [event.what, event.where, event.area].some((attr) =>
            attr?.toLowerCase().includes(query.toLowerCase())
          )
        : true;

      // Filter Out Past Events
      // Calculate a number based on Date and time
      const dayDate = new Date();
      // Give values to days of the week === to their Day/Date
      function timeValue(date, time) {
        let dayValue;
        if (typeof date === 'number') {
          dayValue = date * 1000;
        } else if (date === "Friday"){
          dayValue = 24 * 1000;
        } else if (date === "Saturday") {
          dayValue = 25 * 1000;
        } else if (date === "Sunday") {
          dayValue = 26 * 1000;
        } else if (date === "Thursday") {
          dayValue = 20 * 1000;
        }

        return dayValue + time;
      }
      // Filter those out
      const filterPastEvents = filterPast ? timeValue(event.day, parseEndTime(event.when)) > timeValue(dayDate.getDate(), (dayDate.getHours() + dayDate.getMinutes())) : true;
      return filterByFavorites && filterByActiveTab && filterBySearchQuery && filterPastEvents;
    });
  }, [favorites, activeTab, filter, query]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        filter,
        setFilter,
        menu,
        setMenu,
        events,
        handleFilterFavorites,
        handleToggleFavorited,
        handleFavoriteDisplay,
        FILTERS,
        activeTab,
        handleTabClick,
        date,
        query,
        setQuery,
        handleSearch,
        filterPast, setFilterPast
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Provider custom hooks
export const useLoading = () => {
  const { loading, setLoading } = useContext(UserContext);
  return { loading, setLoading };
};

export const useFilter = () => {
  const {
    filter,
    setFilter,
    FILTERS,
    handleFavoriteDisplay,
    handleFilterFavorites,
    handleToggleFavorited,
  } = useContext(UserContext);
  return {
    filter,
    setFilter,
    FILTERS,
    handleFavoriteDisplay,
    handleFilterFavorites,
    handleToggleFavorited,
  };
};

export const useMenu = () => {
  const { menu, setMenu } = useContext(UserContext);
  return { menu, setMenu };
};

export const useFilterPast = () => {
  const {  filterPast, setFilterPast} = useContext(UserContext);
  return { filterPast, setFilterPast };
}

export const useEvents = () => {
  const { events } = useContext(UserContext);

  return events.sort((a, b) => {
    const days = ["Thursday", "Friday", "Saturday", "Sunday"];
    return (
      days.indexOf(a.day) - days.indexOf(b.day) ||
      parseStartTime(a.when) - parseStartTime(b.when)
    );
  });
};

export const useTabs = () => {
  const { activeTab, handleTabClick } = useContext(UserContext);
  return { activeTab, handleTabClick };
};

export const useDate = () => {
  const { date } = useContext(UserContext);
  return { date };
};

export const useSearch = () => {
  const { query, setQuery, handleSearch } = useContext(UserContext);
  return { query, setQuery, handleSearch };
};

// Helper functions
export const parseStartTime = (str) => {
  const [start, period] = (str ?? "").split("-")[0].split(" ");
  const [startHour, startMinute] = start.split(":");

  const hour = (parseInt(startHour) % 12) + (period === "PM" ? 12 : 0);
  const minute = parseInt(startMinute);

  return hour * 60 + minute;
};

export const parseEndTime = (str) => {
  if (str === undefined) return 1000;
  const [end, period] = (str ?? "").split("-")[1].split(" ");
  const [endHour, endMinute] = end.split(":");

  return (
    (parseInt(endHour) % 12) +
    (period === "PM" ? 12 : 0) * 60 +
    parseInt(endMinute)
  );
};

import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from "react";

export const UserContext = createContext();

const FILTERS = {
  FAVORITES: "FAVORITES",
  ZONE: "ZONE",
  LOCATION: "LOCATION",
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

const dayValue = {
  "Thursday": 1000000,
  "Friday": 2000000,
  "Saturday": 3000000,
  "Sunday": 4000000,
  "Thu": 1000000,
  "Fri": 2000000,
  "Sat": 3000000,
  "Sun": 4000000

}

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
  const [showPast, setShowPast] = useState(false);
  const [showAllDay, setShowAllDay] = useState(true);
  const [install, setInstall] = useState(false);
  const [data, setData] = useState(null); // Initialize as null
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("./schedule.json");
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result); // Update data state with fetched data
      } catch (err) {
        setError(err.message); // Handle fetch error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Fetch data on component mount

  // Set default day
  useEffect(() => {
    if (Date().split(" ")[0].toUpperCase() == "FRI") {
      setActiveTab("FRI")
      return;
    }
    if (Date().split(" ")[0].toUpperCase() == "SAT") {
      setActiveTab("SAT")
      return;
    }
    if (Date().split(" ")[0].toUpperCase() == "SUN") {
      setActiveTab("SUN")
      return;
    }
    setActiveTab("THU")
  }, [])
  

  // Handles toggling the filter view between favorited events and all events
  const handleFilterFavorites = (e) => {
    // Prevents toggling the menu accordion when clicking on favorites
    e.stopPropagation();

    // If the favorites filter is already active, unset it (toggle)
    const newFilter = filter === FILTERS.FAVORITES ? "" : FILTERS.FAVORITES;
    setFilter(newFilter);
  };

  // Handles toggling an individual event into or out of the favorites list
  const handleToggleFavorited = (uid) => {
    setFavorites((prev) => {
      const prevIndex = prev.findIndex((favorite) => favorite.uid === uid);

      // Check if the event is already favorited
      // If it is, unfavorite it
      // If it isn't, use its id to look up the corresponding event data and add it to the favorites list
      const newFavorites =
        prevIndex !== -1
          ? prev.filter((favorite) => favorite.uid !== uid)
          : [...prev, events.find((event) => event.uid === uid)];

      // Set favorite into local storage
      localStorage.setItem("favorites", JSON.stringify(newFavorites));

      return newFavorites;
    });
  };

  // Returns a string to be used as a classname for conditional styling
  const handleFavoriteDisplay = (id) => {
    const isFavorited = favorites.some((favorite) => favorite.uid === id);
    return isFavorited;
  };

  const handleTabClick = (day) => {
    setActiveTab(day);
  };

  const handleSearch = (query) => {
    setQuery(query);
  };

  const handleFilterClick = (button) => {
    if (query === button) setQuery("")
    if (query === "") setQuery(button)
  }

  const events = useMemo(() => {
    if (!data) return []; // Return empty array if data is not yet loaded
    return data.filter((event) => {
      // Favorites Feature
      const filterByFavorites =
        filter === FILTERS.FAVORITES
          ? favorites.some((favorite) => favorite.uid === event.uid)
          : true;
      
      // Day of the Week Footer Feature
      const filterByActiveTab = event.occurrence.long.split(" ")[0] === DAYS[activeTab];

      // Search Feature
      const filterBySearchQuery = query
        ? [event.description, event.location, event.neighborhood].some((attr) =>
            attr?.toLowerCase().includes(query.toLowerCase())
          )
        : true;

      // Filter Out Past Feature
      const date = new Date();
      const showPastEvents = !showPast ? Date.parse(event.occurrence.end_time) > Date.parse(date) : true;

      // Filter Out All Day Feature
      const showAllDayEvents = !showAllDay ? !event.occurrence.short.includes("24hrs") : true ;
      
      // Filter those out
      return filterByFavorites && filterByActiveTab && showPastEvents && showAllDayEvents && filterBySearchQuery;
    });
  }, [data, favorites, activeTab, filter, query, showPast, showAllDay]);

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
        handleFilterClick,
        FILTERS,
        activeTab,
        handleTabClick,
        setInstall,
        install,
        query,
        setQuery,
        handleSearch,
        showPast,
        setShowPast,
        showAllDay,
        setShowAllDay,
        error, // Expose error state
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
    handleFilterClick
  } = useContext(UserContext);
  return {
    filter,
    setFilter,
    FILTERS,
    handleFavoriteDisplay,
    handleFilterFavorites,
    handleToggleFavorited,
    handleFilterClick
  };
};

export const useMenu = () => {
  const { menu, setMenu } = useContext(UserContext);
  return { menu, setMenu };
};

export const useShowPast = () => {
  const { showPast, setShowPast} = useContext(UserContext);
  return { showPast, setShowPast };
}

export const useFilterAllDay = () => {
  const { showAllDay, setShowAllDay} = useContext(UserContext);
  return { showAllDay, setShowAllDay };
}

export const useEvents = () => {
  const { events } = useContext(UserContext);

  return events.sort((a, b) => {
    const days = ["Thursday", "Friday", "Saturday", "Sunday"];
    return (
      days.indexOf(a.day) - days.indexOf(b.day) ||
      parseTime(a.occurrence.start_time) - parseTime(b.occurrence.start_time)
    );
  });
};

export const useTabs = () => {
  const { activeTab, handleTabClick } = useContext(UserContext);
  return { activeTab, handleTabClick };
};

export const useInstall = () => {
  const {install, setInstall} = useContext(UserContext);
  return {install, setInstall}
}

export const useDate = () => {
  const { date } = useContext(UserContext);
  return { date };
};

export const useSearch = () => {
  const { query, setQuery, handleSearch } = useContext(UserContext);
  return { query, setQuery, handleSearch };
};

// Helper functions
export const parseTime = (str) => {

  if (str.includes("T")){

    let time = str.split("T")[1].split(":").join("");
    return time;
  }

  let time = str.split(":").join("");
  return time;
};


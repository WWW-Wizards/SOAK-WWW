import React, { useState, createContext, useContext, useEffect } from "react";
import data from "../../assets/data/events.json";

export const UserContext = createContext();

const FILTERS = {
  FAVORITES: "FAVORITES",
  ZONE: "ZONE",
  CAMP: "CAMP",
  TIME: "TIME",
  CATEGORY: "CATEGORY",
};

const DAYS = {
  DAILY: "DAILY",
  THU: "Thursday",
  FRI: "Friday",
  SAT: "Saturday",
  SUN: "Sunday",
};

const DAY_HEADINGS = {
  DAILY: "Recurring events",
  THU: "Thursday, May 23rd",
  FRI: "Friday, May 24th",
  SAT: "Saturday, May 25th",
  SUN: "Sunday, May 26th",
};

export function StateProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [menu, setMenu] = useState(false);
  const [events, setEvents] = useState(data);
  const [favorites, setFavorites] = useState(() => {
    // Check local storage if favorites exist, otherwise initialize an empty array
    const cachedFavorites = localStorage.getItem("favorites");
    return cachedFavorites ? JSON.parse(cachedFavorites) : [];
  });
  const [activeTab, setActiveTab] = useState(DAYS.DAILY);
  const [date, setDate] = useState(DAY_HEADINGS.DAILY);
  const [query, setQuery] = useState("");

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
    return isFavorited ? "favorited" : "";
  };

  const handleTabClick = (day) => {
    setActiveTab(day);
  };

  const handleSearch = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    // Update local storage whenever favorites state changes
    localStorage.setItem("favorites", JSON.stringify(favorites));

    setDate(DAY_HEADINGS[activeTab]);

    const filteredEvents = data.filter((event) => {
      const filterByFavorites =
        filter === FILTERS.FAVORITES
          ? favorites.some((favorite) => favorite.id === event.id)
          : true;

      const filterByActiveTab =
        activeTab === DAYS.DAILY
          ? event.daily
          : !event.daily && event.day === DAYS[activeTab];

      const filterBySearchQuery = query
        ? [event.what, event.where, event.area].some((attr) =>
            attr?.toLowerCase().includes(query.toLowerCase())
          )
        : true;

      return filterByFavorites && filterByActiveTab && filterBySearchQuery;
    });

    setEvents(filteredEvents);
  }, [favorites, activeTab, filter, query]);

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
        setEvents,
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

export const useEvents = () => {
  const { events } = useContext(UserContext);

  return events.sort((a, b) => {
    const days = ["Thursday", "Friday", "Saturday", "Sunday"];
    return (
      days.indexOf(a.day) - days.indexOf(b.day) ||
      parseTimestamp(a.when) - parseTimestamp(b.when)
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
const parseTimestamp = (str) => {
  const [start, period] = (str ?? "").split("-")[0].split(" ");
  const [startHour, startMinute] = start.split(":");

  return (
    (parseInt(startHour) % 12) +
    (period === "PM" ? 12 : 0) * 60 +
    parseInt(startMinute)
  );
};

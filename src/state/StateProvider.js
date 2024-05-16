import React, { useState, createContext, useContext, useEffect } from 'react';
import data from "../../assets/data/events.json";

export const UserContext = createContext();

export function StateProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState();
  const [menu, setMenu] = useState();
  const [events, setEvents] = useState(data);

  // happens on load
  useEffect(() => {

  }, []); // use brackets to establish additional triggers

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
}
export const useFilter = () => {
  const { filter, setFilter } = useContext(UserContext);
  return { filter, setFilter };
}
export const useMenu = () => {
  const { menu, setMenu } = useContext(UserContext);
  return { menu, setMenu };
}

export const useEvents = () => { 
  const { events } = useContext(UserContext)

  return events.sort((a, b) => {
    const days = ["Thursday", "Friday", "Saturday", "Sunday"];
    return (
      days.indexOf(a.day) - days.indexOf(b.day) ||
      parseTimestamp(a.when) - parseTimestamp(b.when)
    );
  });
}

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

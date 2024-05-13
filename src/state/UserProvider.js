import React, { useState, createContext, useContext, useEffect } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  // state
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState();

  // happens on load
  useEffect(() => {

  }, []); // use brackets to establish additional triggers

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        filter,
        setFilter
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
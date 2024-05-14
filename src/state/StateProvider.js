import React, { useState, createContext, useContext, useEffect } from 'react';

export const UserContext = createContext();

export function StateProvider({ children }) {
  // state
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState();
  const [menu, setMenu] = useState();

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
        setMenu
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
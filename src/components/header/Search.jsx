import React from "react";
import { useSearch } from "../../state/StateProvider";

export const Search = () => {
  const { query, handleSearch } = useSearch();

  return (
    <div className="search-input-wrapper">
      <input
        placeholder="Search..."
        value={query}
        onChange={({ target }) => handleSearch(target.value)}
        onClick={() => handleSearch("")}
      />
    </div>
  );
};

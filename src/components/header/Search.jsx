import React from "react";
import { useSearch, useFilterSearch } from "../../state/StateProvider";

export const Search = () => {
  const { query, handleSearch } = useSearch();
  const { filterSearch, setFilterSearch } = useFilterSearch();

  return (
    <div className="search-input-wrapper">
      <input
        placeholder="Search..."
        value={query}
        onChange={({ target }) => handleSearch(target.value)}
      />
      <button
        className="search-change-button"
        onClick={() => setFilterSearch(!filterSearch)}
      >
        {filterSearch ? "Finding" : "Filtering"}
      </button>
    </div>
  );
};

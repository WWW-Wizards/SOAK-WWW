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
      />
      <div className="menu-contact-us-container">
        <p>Creators Zero-Day, Spooky, Overboard, and Ahoo </p>
        <a
          href="mailto:nick.day.fsd@gmail.com?subject=WWW%APP%20of%202024"
          className="menu-contact-us-link"
        >
          Send Feedback or Kudos
        </a>
      </div>
    </div>
  );
};

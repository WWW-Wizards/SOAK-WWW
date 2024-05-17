import React from "react";
import { useMenu, useFilter, useDate } from "../../state/StateProvider";
import Saved from "../details/icons/Saved";
import { Search } from "./Search";

export const Menu = () => {
  const { menu, setMenu } = useMenu();
  const { date: headingText } = useDate();
  const { filter, FILTERS, handleFilterFavorites } = useFilter();

  return (
    <div className="menu-accordion-wrapper">
      <div className="menu-accordion-content" onClick={() => setMenu(!menu)}>
        <svg
          className={`menu-accordion-svg ${menu ? "expanded" : ""}`}
          viewBox="0 0 24 24"
        >
          <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
        </svg>
        <div className="menu-accordion-heading">
          {headingText.toUpperCase()}
        </div>
        <div
          className="menu-favorites-svg-wrapper"
          onClick={handleFilterFavorites}
        >
          <Saved
            className="menu-favorites-svg"
            fill={filter === FILTERS.FAVORITES ? "#faaf40" : "none"}
          />
        </div>
      </div>
      {menu && (
        <div className="menu-accordion-drawer">
          <Search />
        </div>
      )}
    </div>
  );
};

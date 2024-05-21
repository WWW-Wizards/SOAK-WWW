import React from "react";
import { useMenu, useFilter, useDate } from "../../state/StateProvider";
import Saved from "../details/icons/Saved";
import { Search } from "./Search";
import FilterOptions from "./FilterOptions";
import MenuIcon from "../details/icons/MenuIcon";

export const Menu = () => {
  const { menu, setMenu } = useMenu();
  const { date: headingText } = useDate();
  const { filter, FILTERS, handleFilterFavorites } = useFilter();

  return (
    <div className="menu-accordion-wrapper">
      <div className="menu-accordion-content" onClick={() => setMenu(!menu)}>
        <MenuIcon className={`menu-accordion-svg ${menu ? "expanded" : ""}`} />
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
          <FilterOptions />
          <div className="menu-contact-us-container">
            <p>Creators Zero-Day, Spooky, Overboard, and Ahoo </p>
            <a
              href="mailto:nick.day.fsd@gmail.com?subject=WWW%20APP%20of%202024"
              className="menu-contact-us-link"
            >
              Feedback/Kudos
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

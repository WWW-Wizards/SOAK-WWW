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
      <div className="menu-accordion-content">
        <MenuIcon
          className={`menu-accordion-svg ${menu ? "expanded" : ""}`}
          onClick={() => setMenu(!menu)}
        />
        <Search />
        <div
          className="menu-favorites-svg-wrapper"
          onClick={handleFilterFavorites}
        >
          <Saved
            className="menu-favorites-svg"
            fill={filter === FILTERS.FAVORITES ? "#faaf40" : "none"}
          />
        </div>
        {/* <p>Creators Zero-Day, Spooky, Overboard, and Ahoo </p> */}
      </div>
      {menu && (
        <div className="menu-accordion-drawer">
          <FilterOptions />
          <div className="menu-contact-us-container">
            <a
              href="mailto:nick.day.fsd@gmail.com?subject=WWW%20APP%20of%202025"
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

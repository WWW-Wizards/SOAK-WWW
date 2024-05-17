import React from "react";
import { useMenu, useFilter, useDate } from "../../state/StateProvider";
import Saved from "../details/icons/Saved";
import { Search } from "./Search";
import MenuIcon from "../details/icons/MenuIcon";

export const Menu = () => {
  const { menu, setMenu } = useMenu();
  const { date: headingText } = useDate();
  const { filter, FILTERS, handleFilterFavorites } = useFilter();

  const color = {
    DAILY: "#333333",
    THU: "#02597F",
    FRI: "#1FB2A3",
    SAT: "#FAAF40",
    SUN: "#D9533D",
  };

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
        </div>
      )}
    </div>
  );
};

import React from "react";
import { useMenu, useFilter } from "../../state/StateProvider";

export const Menu = () => {
  const { menu, setMenu } = useMenu();
  const { filter, FILTERS, handleFilterFavorites } = useFilter();

  return (
    <div className="menu-accordion-wrapper">
      <div className="menu-accordion-title" onClick={() => setMenu(!menu)}>
        <svg
          className={`menu-accordion-svg ${menu ? "expanded" : ""}`}
          viewBox="0 0 24 24"
        >
          <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
        </svg>
        <div
          className="menu-favorites-svg-wrapper"
          onClick={handleFilterFavorites}
        >
          <svg
            className={`menu-favorites-svg ${
              filter === FILTERS.FAVORITES ? "menu-favorited" : ""
            }`}
            viewBox="0 0 24 24"
          >
            <path d="M12 2L9.14 8.8 2 9.56l6.18 5.34L5.82 21 12 17.27 18.18 21l-2.36-6.1L22 9.56l-7.14-.76L12 2z"></path>
          </svg>
        </div>
      </div>
      {menu && (
        <div className="menu-accordion-content">Menu content placeholder</div>
      )}
    </div>
  );
};

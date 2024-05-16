import React from "react";
import { useMenu, useFilter } from "../../state/StateProvider";

export const Menu = () => {
  const { menu, setMenu } = useMenu();

  return (
    <div className="menu-accordion-wrapper">
      <div className="menu-accordion-title" onClick={() => setMenu(!menu)}>
        <svg
          className={`menu-accordion-svg ${menu ? "expanded" : ""}`}
          viewBox="0 0 24 24"
        >
          <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
        </svg>
      </div>
      {menu && (
        <div className="menu-accordion-content">Menu content placeholder</div>
      )}
    </div>
  );
};

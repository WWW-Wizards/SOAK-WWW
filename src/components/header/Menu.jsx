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
    <div className="menu-header-wrapper">
      <div className="menu-header-content">
        <Search />
        <section className="menu-header-icon-wrapper">
          <div
            className="menu-favorites-svg-wrapper"
            onClick={handleFilterFavorites}
          >
            <Saved
              className="menu-favorites-svg"
              fill={filter === FILTERS.FAVORITES ? "#faaf40" : "none"}
            />
          </div>
          <MenuIcon
            className={`menu-header-svg ${menu ? "expanded" : "closed"}`}
            onClick={() => setMenu(!menu)}
          />
        </section>
        {/* <p>Creators Zero-Day, Spooky, Overboard, and Ahoo </p> */}
      </div>
      {menu && (
        <div className="menu-accordian-drawer">
          <FilterOptions />
          <div className="menu-accordian-contact">
            Created by<br></br> ZeroDay + Spooky + Ahoo + Overboard <br></br>
            <div className="menu-accordian-links">
              <a
                href="mailto:nick.day.fsd@gmail.com?subject=WWW%20APP%20of%202025"
                className="menu-contact-us-link"
              >
                Feedback/Kudos (email)
              </a>
              <a href="https://ecograder.com/report/c2OWNACPj6X08fDIuoiDqowy">
                Ecograde
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

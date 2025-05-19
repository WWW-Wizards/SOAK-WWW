import React from "react";
import { isMobile } from "react-device-detect";
import {
  useMenu,
  useFilter,
  useInstall,
  useMap,
} from "../../state/StateProvider";
import Saved from "../details/icons/Saved";
import { Search } from "./Search";
import FilterOptions from "./FilterOptions";
import MenuIcon from "../details/icons/MenuIcon";

export const Menu = () => {
  const { menu, setMenu } = useMenu();
  const { filter, FILTERS, handleFilterFavorites } = useFilter();
  const { setInstall } = useInstall();
  const { showMap, setShowMap } = useMap();

  function handleInstallClick() {
    setInstall(true);
    setMenu(false);
  }

  function handleMapClick() {
    setShowMap(!showMap);
    setMenu(false);
  }

  return (
    <div className="menu-header-wrapper">
      {!showMap ? (
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
        </div>
      ) : (
        <div className="menu-header-map">
          <button
            className="event-details-footer-button"
            onClick={() => handleMapClick()}
          >
            BACK
          </button>
        </div>
      )}
      {menu && (
        <div className="menu-accordian-drawer">
          <FilterOptions />

          <div className="install-button-wrapper">
            {isMobile && (
              <button
                className="event-details-footer-button"
                onClick={() => handleInstallClick()}
              >
                INSTALL
              </button>
            )}
            <button
              className="event-details-footer-button"
              onClick={() => handleMapClick()}
            >
              MAP
            </button>
          </div>

          <div className="menu-accordian-contact">
            Created by ZeroDay <br></br>
            With Ahoo, Spooky, and Overboard <br></br>
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

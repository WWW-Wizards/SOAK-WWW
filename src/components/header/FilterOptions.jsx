import React from "react";
import { useShowPast, useFilterAllDay } from "../../state/StateProvider";

function FilterOptions() {
  const { showPast, setShowPast } = useShowPast();
  const { showAllDay, setShowAllDay } = useFilterAllDay();

  return (
    <div className="menu-filter-container">
      <label className="menu-filter-title">FILTERS</label>
      <label htmlFor="allDay" className="menu-filter-label">
        All Day
        <div className="menu-filter-switch">
          <input
            type="checkbox"
            id="allDay"
            name="allDay"
            // className="menu-filter-slider"
            value="showAllDay"
            checked={showAllDay}
            onChange={() => setShowAllDay(!showAllDay)}
          ></input>
          <span className="menu-filter-slider"></span>
        </div>
      </label>
      {/* adult only */}
      <label htmlFor="pastEvents" className="menu-filter-label">
        The Past
        <div className="menu-filter-switch">
          <input
            type="checkbox"
            id="pastEvents"
            name="pastEvents"
            value="showPast"
            checked={showPast}
            onChange={() => setShowPast(!showPast)}
          ></input>
          <span className="menu-filter-slider"></span>
        </div>
      </label>
    </div>
  );
}

export default FilterOptions;

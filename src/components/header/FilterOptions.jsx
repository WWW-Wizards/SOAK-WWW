import React from "react";
import { useFilterPast, useFilterAllDay } from "../../state/StateProvider";

function FilterOptions() {
  const { filterPast, setFilterPast } = useFilterPast();
  const { filterAllDay, setFilterAllDay } = useFilterAllDay();
  return (
    <div className="menu-filter-container">
      <label htmlFor="pastEvents" className="menu-filter-label">
        Hide Past Events
        <div className="menu-filter-switch">
          <input
            type="checkbox"
            id="pastEvents"
            name="pastEvents"
            value="filterPast"
            checked={filterPast}
            onChange={() => setFilterPast(!filterPast)}
          ></input>
          <span className="menu-filter-slider"></span>
        </div>
      </label>
      <label htmlFor="allDay" className="menu-filter-label">
        Hide All Day Events
        <div className="menu-filter-switch">
          <input
            type="checkbox"
            id="allDay"
            name="allDay"
            // className="menu-filter-slider"
            value="filterAllDay"
            checked={filterAllDay}
            onChange={() => setFilterAllDay(!filterAllDay)}
          ></input>
          <span className="menu-filter-slider"></span>
        </div>
      </label>
    </div>
  );
}

export default FilterOptions;

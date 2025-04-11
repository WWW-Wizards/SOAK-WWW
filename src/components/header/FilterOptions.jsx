import React from "react";
import { useFilterPast, useFilterAllDay } from "../../state/StateProvider";

function FilterOptions() {
  const { filterPast, setFilterPast } = useFilterPast();
  const { filterAllDay, setFilterAllDay } = useFilterAllDay();
  return (
    <div className="menu-filter-container">
      <label htmlFor="pastEvents" className="menu-filter-label">
        Hide Past Events
        <input
          type="checkbox"
          id="pastEvents"
          name="pastEvents"
          className="menu-filter-checkbox"
          value="filterPast"
          checked={filterPast}
          onChange={() => setFilterPast(!filterPast)}
        ></input>
      </label>
      <label htmlFor="allDay" className="menu-filter-label">
        Hide All Day Events
        <input
          type="checkbox"
          id="allDay"
          name="allDay"
          className="menu-filter-checkbox"
          value="filterAllDay"
          checked={filterAllDay}
          onChange={() => setFilterAllDay(!filterAllDay)}
        ></input>
      </label>
    </div>
  );
}

export default FilterOptions;

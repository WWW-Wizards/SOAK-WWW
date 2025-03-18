import React from "react";
import { useFilterPast } from "../../state/StateProvider";

function FilterOptions() {
  const { filterPast, setFilterPast } = useFilterPast();
  return (
    <div className="menu-filter-container">
      <label htmlFor="pastEvents" className="menu-filter-checkbox">
        Hide Past Events
        <input
          type="checkbox"
          id="pastEvents"
          name="pastEvents"
          value="filterPast"
          checked={filterPast}
          onChange={() => setFilterPast(!filterPast)}
        ></input>
      </label>
    </div>
  );
}

export default FilterOptions;

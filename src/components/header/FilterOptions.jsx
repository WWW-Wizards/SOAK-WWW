import React from "react";
import { useFilterPast } from "../../state/StateProvider";

function FilterOptions() {
  const { filterPast, setFilterPast } = useFilterPast();
  return (
    <div className="menu-filter-container">
      <button
        className="menu-filter-past-button"
        onClick={() => {
          setFilterPast(!filterPast);
          console.log("filter past: ", filterPast);
        }}
      >
        Hide Past Events: {filterPast ? "active" : "disabled"}
      </button>
    </div>
  );
}

export default FilterOptions;

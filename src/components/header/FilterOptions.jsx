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
        }}
      >
        {filterPast ? "Only the Future" : "The Whole Picture"}
      </button>
    </div>
  );
}

export default FilterOptions;

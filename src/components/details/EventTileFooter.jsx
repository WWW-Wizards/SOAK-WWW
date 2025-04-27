import React from "react";
import { useFilter } from "../../state/StateProvider";

function EventTileFooter({ event }) {
  const { handleFilterClick } = useFilter();

  const area = {
    Mezzanine: "#E0E3EE",
    "Lower Bowl": "#E0E3EE",
    "Main Field": "#E1ECE1",
    Barn: "#E1ECE1",
    "Upper Bowl": "#E1ECE1",
    Riverside: "#E1ECE1",
    "North Point Forest": "#E1ECE1",
    "Forest Entry": "#E5DAE7",
    Meadow: "#E9F2E7",
    Somewhere: "#E0E0E0",
  };

  return (
    <section className="event-details-footer">
      <button
        className="event-details-footer-button"
        onClick={() => handleFilterClick(event.camp)}
      >
        {event.camp}
      </button>
      {/* Neighborhood button goes here */}
    </section>
  );
}

export default EventTileFooter;

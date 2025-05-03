import React from "react";
import { useFilter } from "../../state/StateProvider";

function EventTileFooter({ event }) {
  const { handleFilterClick } = useFilter();

  const area = {
    Mezzanine: "#3c4978",
    "Lower Bowl": "#3c4978",
    "Main Field": "#408040",
    "Upper Bowl": "#408040",
    Riverside: "#408040",
    "North Point Forest": "#408040",
    "Mobile Art": "#408040",
    Around: "#408040",
    "Forest Entry": "#894a94",
    "The Meadow": "#894a94",
  };

  return (
    <section className="event-details-footer">
      <button
        className="event-details-footer-button"
        style={{ backgroundColor: area[event.neighborhood] }}
        onClick={() => handleFilterClick(event.location)}
      >
        {event.location}
      </button>
      <button
        className="event-details-footer-button"
        style={{ backgroundColor: area[event.neighborhood] }}
        onClick={() => handleFilterClick(event.neighborhood)}
      >
        {event.neighborhood}
      </button>
    </section>
  );
}

export default EventTileFooter;

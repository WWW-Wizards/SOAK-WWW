import React from "react";
import { useFilter } from "../../state/StateProvider";

function EventTileFooter({ event }) {
  const { handleFilterClick } = useFilter();

  const area = {
    Mezzanine: "#6374A6",
    "Lower Bowl": "#6374A6",
    "Main Field": "#9EC4D3",
    Barn: "#9EC4D3",
    "Upper Bowl": "#9EC4D3",
    Riverside: "#9EC4D3",
    "North Point Forest": "#9EC4D3",
    "Forest Entry": "#AC70B3",
    Meadow: "#86B57A",
    Somewhere: "#EAEAEA",
  };

  return (
    <section className="event-details-footer">
      <button
        className="event-details-footer-button"
        onClick={() => handleFilterClick(event.where)}
      >
        {event.where}
      </button>

      <button
        className="event-details-footer-button"
        style={{ "--area-color": [area[event.area]] }}
        onClick={() => handleFilterClick(event.area)}
      >
        {event.area}
      </button>
    </section>
  );
}

export default EventTileFooter;

import React from "react";

function EventTileFooter({ event }) {
  const area = {
    Mezzanine: "#6374A6",
    "Lower Bowl": "#6374A6",
    "Main Field": "#9EC4D3",
    "Upper Bowl": "#9EC4D3",
    Riverside: "#9EC4D3",
    "North Point Forest": "#9EC4D3",
    "Forest Entry": "#AC70B3",
    Meadow: "#86B57A",
    Somewhere: "#EAEAEA",
  };

  return (
    <section className="event-details-footer">
      <div className="event-details-footer-where">{event.where}</div>

      <div
        className="event-details-footer-area"
        style={{ "--area-color": [area[event.area]] }}
      >
        {event.area}
      </div>
    </section>
  );
}

export default EventTileFooter;

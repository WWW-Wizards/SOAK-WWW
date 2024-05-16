import React from "react";

function EventTileHeader({ event }) {
  return (
    <section className="event-details-title">
      <div className="event-details-title-left">{event.where}</div>
      <div className="event-details-title-center">X</div>
      <div className="event-details-title-right">{event.when}</div>
    </section>
  );
}

export default EventTileHeader;

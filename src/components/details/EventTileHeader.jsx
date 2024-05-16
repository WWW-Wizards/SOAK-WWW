import React from "react";
import Save from "./icons/Save";
import Saved from "./icons/Saved";

function EventTileHeader({ event }) {
  return (
    <section className="event-details-title">
      <div className="event-details-title-left">{event.where}</div>
      <div className="event-details-title-center">X</div>
      <div className="event-details-title-right">
        {event.when} {event.day} {event.daily}
      </div>
    </section>
  );
}

export default EventTileHeader;

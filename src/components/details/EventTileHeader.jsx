import React from "react";
import Save from "./icons/Save";
import Saved from "./icons/Saved";

function EventTileHeader({ event }) {
  return (
    <section className="event-details-title">
      <div className="event-details-title-left">{event.when}</div>
      <Save />
    </section>
  );
}

export default EventTileHeader;

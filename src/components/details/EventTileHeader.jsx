import React from "react";
import Save from "./icons/Save";
import Saved from "./icons/Saved";
import FavIcon from "./FavIcon";

function EventTileHeader({ event }) {
  return (
    <section className="event-details-title">
      <div className="event-details-title-left">{event.when}</div>
      <FavIcon event={event} />
    </section>
  );
}

export default EventTileHeader;

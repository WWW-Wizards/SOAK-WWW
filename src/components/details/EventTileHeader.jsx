import React from "react";
import Save from "./icons/Save";
import Saved from "./icons/Saved";
import FavIcon from "./FavIcon";

function EventTileHeader({ event }) {
  let when = event.when;
  if (event.when === "12:00 AM-11:59 PM") {
    when = "All Day";
  }

  return (
    <section className="event-details-title">
      <div className="event-details-title-left">{when}</div>
      <FavIcon event={event} />
    </section>
  );
}

export default EventTileHeader;

import React from "react";
import FavIcon from "./FavIcon";
import SolarIcon from "./SolarIcon";

function EventTileHeader({ event }) {
  let when = event.occurrence.long.split(" ")[1].replace("-", " to ");

  if (event.occurrence.short.includes("24hrs")) {
    when = "All Day";
  }

  return (
    <section className="event-header-title">
      <SolarIcon event={event} />
      <div className="event-header-title-left">{when}</div>
      <FavIcon event={event} />
    </section>
  );
}

export default EventTileHeader;

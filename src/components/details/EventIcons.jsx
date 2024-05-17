import React from "react";
import CatIcon from "./CatIcon";
import SolarIcon from "./SolarIcon";
import Location from "./icons/Location";

function EventIcons({ event }) {
  return (
    <section className="event-details-icons">
      <SolarIcon time={event.when} />
      <CatIcon category={event.eventType} />
      <Location />
    </section>
  );
}

export default EventIcons;

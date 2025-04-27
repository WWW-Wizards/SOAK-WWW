import React from "react";
import CatIcon from "./CatIcon";
// import Location from "./icons/Location";

function EventIcons({ event }) {
  return (
    <section className="event-details-icons">
      <CatIcon category={event.event_type.label} />
      {/* <Location /> */}
    </section>
  );
}

export default EventIcons;

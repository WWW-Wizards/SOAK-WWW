import React from "react";

function EventTileHeader({ event }) {
  // console.log(`Event tile header event: ${event.where}`);
  return (
    <section className="event-details-title">
      <div>{event.where}</div>
      <div>day/night icon</div>
      <div>{event.when}</div>
    </section>
  );
}

export default EventTileHeader;

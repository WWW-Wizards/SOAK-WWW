import React from "react";

function EventTileFooter({ event }) {
  //console.log(`Event tile footer event: ${event}`);
  return (
    <section className="event-details-pill-group">
      <div>category icons</div>
      <div>favorite button</div>
      {event.area !== null ? <div>{event.area}</div> : <div>somewhere</div>}
    </section>
  );
}

export default EventTileFooter;

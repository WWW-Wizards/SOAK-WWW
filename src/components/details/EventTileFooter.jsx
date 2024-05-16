import React from "react";

function EventTileFooter({ event }) {
  //console.log(`Event tile footer event: ${event}`);
  return (
    <section className="event-details-footer">
      <div className="event-details-footer-left">category icons</div>
      <div className="event-details-footer-center">X</div>
      {event.area !== null ? (
        <div className="event-details-footer-right">{event.area}</div>
      ) : (
        <div className="event-details-footer-right">somewhere</div>
      )}
    </section>
  );
}

export default EventTileFooter;

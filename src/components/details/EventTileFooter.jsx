import React from "react";

function EventTileFooter({ event }) {
  //console.log(`Event tile footer event: ${event}`);
  return (
    <section className="event-details-footer">
      <div className="event-details-footer-where">{event.where}</div>
      {event.area ? (
        <div className="event-details-footer-area">{event.area}</div>
      ) : (
        <div className="event-details-footer-area">somewhere</div>
      )}
    </section>
  );
}

export default EventTileFooter;

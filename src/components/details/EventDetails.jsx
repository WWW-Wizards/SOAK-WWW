import React from "react";

export const EventDetails = (event) => {
  const date = {
    Thursday: "#75d4f5",
    Friday: "#A6f9b1",
    Saturday: "#Eff9a6",
    Sunday: "#F9e0a6",
  };

  return (
    <div
      className="event-details"
      style={{ "--date-color": [date[event.day]] }}
    >
      <div className="event-details-title">
        <div>{event.time}</div>
        <div>{event.camp}</div>
      </div>
      <div>{event.description}</div>
      <div className="event-details-pill-group">
        <div>{event.category}</div>
        <div>{event.zone}</div>
      </div>
    </div>
  );
};

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
        {/* TODO: Display "all day" events */}
        <div>
          {event.when} {event.day}
        </div>
        <div>{event.where}</div>
      </div>
      <div className="event-details-pill-group">
        {/* TODO: Some events do not have an "area" (as in "The Gas Station") */}
        <div>{event.area}</div>
        <div>{event.eventType.toLowerCase()}</div>
      </div>
      <div className="event-details-description">{event.what}</div>
    </div>
  );
};

import React from "react";
import EventTileHeader from "./EventTileHeader";
import EventTileFooter from "./EventTileFooter";

export const EventTile = (event) => {
  const date = {
    Thursday: "#75d4f5",
    Friday: "#A6f9b1",
    Saturday: "#Eff9a6",
    Sunday: "#F9e0a6",
  };

  const toDo = ["calculate day/night/all day", "some events have no area"];
  return (
    <div
      className="event-details"
      style={{ "--date-color": [date[event.day]] }}
    >
      {/* <div className="event-details-title">
        <div>
          {event.when} {event.day}
        </div>
        <div>{event.where}</div>
      </div>
      <div className="event-details-pill-group">
        <div>{event.area}</div>
        <div>{event.eventType.toLowerCase()}</div>
      </div> */}
      <EventTileHeader event={event} />
      <div className="event-details-description">{event.what}</div>
      <EventTileFooter event={event} />
    </div>
  );
};

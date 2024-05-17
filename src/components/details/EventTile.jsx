import React from "react";
import EventTileHeader from "./EventTileHeader";
import EventTileFooter from "./EventTileFooter";
import EventIcons from "./EventIcons";

export const EventTile = (event) => {
  const area = {
    Mezzanine: "#E0E3EE",
    "Lower Bowl": "#E0E3EE",
    "Main Field": "#E7F0F4",
    "Upper Bowl": "#E7F0F4",
    Riverside: "#E7F0F4",
    "North Point Forest": "#E7F0F4",
    "Forest Entry": "#E5DAE7",
    Meadow: "#E9F2E7",
    Somewhere: "#E0E0E0",
  };

  // const toDo = ["calculate day/night/all day", "some events have no area"];
  return (
    <div className="event-tile" style={{ "--area-color": [area[event.area]] }}>
      <EventIcons event={event} />
      <section className="event-details">
        <EventTileHeader event={event} />
        <div className="event-details-description">{event.what}</div>
        <EventTileFooter event={event} />
      </section>
    </div>
  );
};

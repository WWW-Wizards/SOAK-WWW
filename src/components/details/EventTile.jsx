import React from "react";
import EventTileHeader from "./EventTileHeader";
import EventTileFooter from "./EventTileFooter";
import EventIcons from "./EventIcons";

export const EventTile = (event) => {
  const area = {
    "Main Field": "#75d4f5",
    Mezzanine: "#A6f9b1",
    "Forest Entry": "#Eff9a6",
    "Upper Bowl East": "#F9e0a6",
    "Lower Bowl": "",
    Riverside: "",
    "North Point Forest": "",
    Meadow: "",
  };

  // const toDo = ["calculate day/night/all day", "some events have no area"];
  return (
    <div className="event-tile" style={{ "--area-color": [area[event.area]] }}>
      <EventIcons />
      <section className="event-details">
        <EventTileHeader event={event} />
        <div className="event-details-description">{event.what}</div>
        <EventTileFooter event={event} />
      </section>
    </div>
  );
};

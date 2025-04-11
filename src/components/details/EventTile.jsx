import React from "react";
import EventTileHeader from "./EventTileHeader";
import EventDescription from "./EventDescription";
import EventTileFooter from "./EventTileFooter";
import EventIcons from "./EventIcons";

export const EventTile = (event) => {
  const area = {
    Mezzanine: "#E0E3EE",
    "Lower Bowl": "#E0E3EE",
    "Main Field": "#d7e9d7",
    Barn: "#E7F0F4",
    "Upper Bowl": "#E7F0F4",
    Riverside: "#c6d8c6",
    "North Point Forest": "#E7F0F4",
    "Forest Entry": "#c6d8c6",
    Meadow: "#E9F2E7",
    Somewhere: "#E0E0E0",
  };

  return (
    <div className="event-tile" style={{ "--area-color": [area[event.area]] }}>
      <EventIcons event={event} />
      <section className="event-details">
        <EventTileHeader event={event} />
        <EventDescription description={event.what} />
        <EventTileFooter event={event} />
      </section>
    </div>
  );
};

import React from "react";
import EventTileHeader from "./EventTileHeader";
import EventDescription from "./EventDescription";
import EventTileFooter from "./EventTileFooter";
import EventIcons from "./EventIcons";

export const EventTile = (event) => {
  const area = {
    Mezzanine: "#E0E3EE",
    "Lower Bowl": "#E0E3EE",
    "Main Field": "#E1ECE1",
    Barn: "#E1ECE1",
    "Upper Bowl": "#E1ECE1",
    Riverside: "#E1ECE1",
    "North Point Forest": "#E1ECE1",
    "Forest Entry": "#E5DAE7",
    Meadow: "#E9F2E7",
    Somewhere: "#E0E0E0",
  };

  return (
    <div className="event-tile" style={{ "--area-color": [area[event.area]] }}>
      <EventIcons event={event} />
      <section className="event-details">
        <EventTileHeader event={event} />
        <EventDescription event={event} area={area} />
        <EventTileFooter event={event} />
      </section>
    </div>
  );
};

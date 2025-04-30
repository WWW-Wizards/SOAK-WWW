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
    "Upper Bowl": "#E1ECE1",
    Riverside: "#E1ECE1",
    "North Point Forest": "#E1ECE1",
    "Mobile Art": "#E1ECE1",
    Around: "#E1ECE1",
    "Forest Entry": "#E5DAE7",
    "The Meadow": "#E5DAE7",
  };

  return (
    <div
      className="event-tile"
      style={{ backgroundColor: area[event.neighborhood] }}
    >
      <EventTileHeader event={event} />
      <section className="event-details">
        <EventIcons event={event} />
        <EventDescription event={event} />
      </section>
      <EventTileFooter event={event} />
    </div>
  );
};

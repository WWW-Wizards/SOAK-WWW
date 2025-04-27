import React from "react";
import EventTileHeader from "./EventTileHeader";
import EventDescription from "./EventDescription";
import EventTileFooter from "./EventTileFooter";
import EventIcons from "./EventIcons";

export const EventTile = (event) => {
  const area = {
    Mezzanine: "#E0E3EE",
    LowerBowl: "#E0E3EE",
    MainField: "#E1ECE1",
    Barn: "#E1ECE1",
    UpperBowl: "#E1ECE1",
    Riverside: "#E1ECE1",
    NorthPointForest: "#E1ECE1",
    ForestEntry: "#E5DAE7",
    Meadow: "#E9F2E7",
    Somewhere: "#E0E0E0",
  };

  const areaColor = ["#E0E3EE", "#E1ECE1", "#E5DAE7", "#E9F2E7", "#E0E0E0"];

  const pickRandomHood = (area) => {
    const random = Math.floor(Math.random() * area.length);
    return area[random];
  };

  const hood = pickRandomHood(area);

  const color = pickRandomHood(areaColor);

  return (
    <div className="event-tile" style={{ backgroundColor: color }}>
      <EventTileHeader event={event} />
      <section className="event-details">
        <EventIcons event={event} />
        <section>
          <EventDescription event={event} area={hood} />
          <EventTileFooter event={event} />
        </section>
      </section>
    </div>
  );
};

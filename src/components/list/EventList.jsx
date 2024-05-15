import React from "react";
import events from "../../../assets/data/sample.json";
import { EventDetails } from "../details/EventDetails";

export const EventList = () => {
  let eventNum = 0;
  const eventList = events["SOAK 2024"].map((event) => {
    eventNum++;
    return (
      <section key={eventNum}>
        <EventDetails {...event} />
      </section>
    );
  });

  return <div className="event-list">{eventList}</div>;
};

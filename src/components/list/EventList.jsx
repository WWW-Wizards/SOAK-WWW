import React from "react";
import events from "../../../assets/data/sample.json";
import { EventDetails } from "../details/EventDetails";

export const EventList = () => {
  const eventList = events["SOAK 2024"].map((event) => {
    return <EventDetails {...event} />;
  });

  return <div className="event-list">{eventList}</div>;
};

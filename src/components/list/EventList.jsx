import React from "react";
import { EventDetails } from "../details/EventDetails";
import { useEvents } from "../../state/StateProvider";

export const EventList = () => {
  const events = useEvents();

  const eventList = events.map((event, index) => (
    <section key={index}>
      <EventDetails {...event} />
    </section>
  ));

  return <div className="event-list">{eventList}</div>;
};

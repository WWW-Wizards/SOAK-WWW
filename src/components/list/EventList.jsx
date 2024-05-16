import React from "react";
import { EventTile } from "../details/EventTile";
import { useEvents } from "../../state/StateProvider";

export const EventList = () => {
  const events = useEvents();

  const eventList = events.map((event, index) => (
    <section key={index}>
      <EventTile {...event} />
    </section>
  ));

  return <div className="event-list">{eventList}</div>;
};

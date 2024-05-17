import React from "react";
import { EventTile } from "../details/EventTile";
import { useEvents, useMenu } from "../../state/StateProvider";

export const EventList = () => {
  const events = useEvents();
  const { setMenu } = useMenu();

  const eventList = events.map((event, index) => (
    <section key={index}>
      <EventTile {...event} />
    </section>
  ));

  return (
    <div className="event-list" onClick={() => setMenu(false)}>
      {eventList}
    </div>
  );
};

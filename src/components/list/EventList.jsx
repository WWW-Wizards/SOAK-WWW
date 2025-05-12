import React from "react";
import { EventTile } from "../details/EventTile";
import Install from "./Install";
import { useEvents, useMenu, useInstall } from "../../state/StateProvider";

export const EventList = () => {
  const events = useEvents();
  const { setMenu } = useMenu();
  const { install, setInstall } = useInstall();

  let opaque;
  if (install) {
    opaque = "50%";
  }
  if (!install) {
    opaque = "100%";
  }

  const clearWindows = () => {
    setMenu(false);
    setInstall(false);
  };

  const eventList = events.map((event) => (
    <section
      style={{
        opacity: opaque,
      }}
      key={event.uid}
      onClick={() => clearWindows()}
    >
      <EventTile {...event} />
    </section>
  ));

  return (
    <div className="event-list">
      {install && <Install />}
      {eventList}
    </div>
  );
};

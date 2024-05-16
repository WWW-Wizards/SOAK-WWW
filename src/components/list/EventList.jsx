import React from "react";
import events from "../../../assets/data/events.json";
import { EventTile } from "../details/EventTile";

export const EventList = () => {
  const eventList = events
    .sort((a, b) => {
      const days = ["Thursday", "Friday", "Saturday", "Sunday"];
      return (
        days.indexOf(a.day) - days.indexOf(b.day) ||
        parseTimestamp(a.when) - parseTimestamp(b.when)
      );
    })
    .map((event, index) => (
      <section key={index}>
        <EventTile {...event} />
      </section>
    ));

  return <div className="event-list">{eventList}</div>;
};

const parseTimestamp = (str) => {
  const [start, period] = (str ?? "").split("-")[0].split(" ");
  const [startHour, startMinute] = start.split(":");

  return (
    (parseInt(startHour) % 12) +
    (period === "PM" ? 12 : 0) * 60 +
    parseInt(startMinute)
  );
};

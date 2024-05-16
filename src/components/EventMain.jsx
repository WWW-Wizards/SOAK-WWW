import React from "react";
import { Menu } from "./menu/Menu";
import { EventList } from "./List/EventList";

function EventMain() {
  return (
    <main className="app">
      <Menu />
      <EventList />
    </main>
  );
}

export default EventMain;

import React from "react";
import { Menu } from "./menu/Menu";
import { EventList } from "./List/EventList";
import { Footer } from "./footer/Footer";

function EventMain() {
  return (
    <main className="app">
      <Menu />
      <EventList />
      <Footer />
    </main>
  );
}

export default EventMain;

import React from "react";
import { Menu } from "./header/Menu";
import { EventList } from "./list/EventList";
import { Footer } from "./footer/Footer";
import { useMap } from "../state/StateProvider";

function EventMain() {
  const { showMap } = useMap();
  return (
    <main className="app">
      <Menu />
      <EventList />
      {!showMap && <Footer />}
    </main>
  );
}

export default EventMain;

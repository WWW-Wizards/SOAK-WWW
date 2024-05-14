import React from "react";
import Menu from "./menu/Menu";

import { useMenu } from "../state/StateProvider";
import { EventList } from "./List/EventList";

function EventMain() {
  // state
  const { menu } = useMenu();

  return (
    <main>
      <Menu />
      <EventList />
    </main>
  );
}

export default EventMain;

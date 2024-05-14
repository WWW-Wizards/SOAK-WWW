import React from "react";
import Menu from "./menu/Menu";

import { useMenu } from "../state/StateProvider";

function EventMain() {
  // state
  const { menu } = useMenu();

  return (
    <main>
      <Menu />
      <h1>Hello World</h1>
    </main>
  );
}

export default EventMain;

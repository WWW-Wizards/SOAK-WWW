import React from "react";
import AllDay from "./icons/AllDay";
import DayTime from "./icons/DayTime";
import NightTime from "./icons/NightTime";

function SolarIcon({ event }) {
  // Figure out which icon to display based on event time
  return (
    <div>
      <AllDay />
    </div>
  );
}

export default SolarIcon;

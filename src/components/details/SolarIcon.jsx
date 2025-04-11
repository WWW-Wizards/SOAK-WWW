import React from "react";
import AllDay from "./icons/AllDay";
import DayTime from "./icons/DayTime";
import NightTime from "./icons/NightTime";
import { parseStartTime } from "../../state/StateProvider";

function SolarIcon({ event }) {
  // Figure out which icon to display based on event time
  const startTime = parseStartTime(event.when);

  const sunrise = parseStartTime("5:30 AM");
  const sunset = parseStartTime("8:45 PM");

  if (event.when === "12:00 AM-11:59 PM") {
    return (
      <div>
        <AllDay />
      </div>
    );
  }
  if (startTime > sunrise && startTime < sunset) {
    return (
      <div>
        <DayTime />
      </div>
    );
  }
  if (startTime < sunrise || startTime > sunset) {
    return (
      <div>
        <NightTime />
      </div>
    );
  }
}

export default SolarIcon;

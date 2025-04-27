import React from "react";
import AllDay from "./icons/AllDay";
import DayTime from "./icons/DayTime";
import NightTime from "./icons/NightTime";
import { parseTime } from "../../state/StateProvider";

function SolarIcon({ event }) {
  // Figure out which icon to display based on event time
  const startTime = parseTime(event.occurrence.start_time);

  const sunrise = parseTime("05:30:00");
  const sunset = parseTime("20:45:00");

  if (event.occurrence.short.includes("24hrs")) {
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

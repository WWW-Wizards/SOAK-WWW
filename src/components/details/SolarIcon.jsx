import React from "react";
import AllDay from "./icons/AllDay";
import DayTime from "./icons/DayTime";
import NightTime from "./icons/NightTime";
import { parseStartTime } from "../../state/StateProvider";

function SolarIcon({ event }) {
  // Figure out which icon to display based on event time
  const sunrise = parseStartTime("5:30 AM-6:00 AM");
  const sunset = parseStartTime("8:30 PM-9:00 PM");

  const timeNumbers = parseStartTime(event.when);

  return (
    <div>
      {/* {event.allDay ? <AllDay /> : ""}
      {timeNumbers > 0 && timeNumbers <= sunrise ? <NightTime /> : ""}
      {timeNumbers >= sunset ? <NightTime /> : ""}
      {timeNumbers > sunrise || timeNumbers < sunset ? <DayTime /> : ""} */}
      <AllDay />
    </div>
  );
}

export default SolarIcon;

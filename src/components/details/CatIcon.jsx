import React from "react";
import CatArt from "./icons/CatArt";
import CatClass from "./icons/CatClass";
import CatEntertainment from "./icons/CatEntertainment";
import CatFoodBev from "./icons/CatFoodBev";
import CatMisc from "./icons/CatMisc";

function CatIcon({ event }) {
  return (
    <div>
      {event.eventType === "Experience/Interactive Art" ? <CatArt /> : ""}
      {event.eventType === "Class/Workshop" ? <CatClass /> : ""}
      {event.eventType === "Performance/Entertainment" ? (
        <CatEntertainment />
      ) : (
        ""
      )}
      {event.eventType === "Food/Beverage" ? <CatFoodBev /> : ""}
      {event.eventType === "Other" ? <CatMisc /> : ""}
    </div>
  );
}

export default CatIcon;

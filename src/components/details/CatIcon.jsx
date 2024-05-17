import React from "react";
import CatArt from "./icons/CatArt";
import CatClass from "./icons/CatClass";
import CatEntertainment from "./icons/CatEntertainment";
import CatFoodBev from "./icons/CatFoodBev";
import CatMisc from "./icons/CatMisc";

function CatIcon({ category }) {
  return (
    <div>
      {category === "Experience/Interactive Art" ? <CatArt /> : ""}
      {category === "Class/Workshop" ? <CatClass /> : ""}
      {category === "Performance/Entertainment" ? <CatEntertainment /> : ""}
      {category === "Food/Beverage" ? <CatFoodBev /> : ""}
      {category === "Other" ? <CatMisc /> : ""}
    </div>
  );
}

export default CatIcon;

import React from "react";
import CatArt from "./icons/CatArt";
import CatClass from "./icons/CatClass";
import CatEntertainment from "./icons/CatEntertainment";
import CatFoodBev from "./icons/CatFoodBev";
import CatMisc from "./icons/CatMisc";

function CatIcon({ category }) {
  // All Categories: Arts & Crafts, Class/Workshop, Diversity & Inclusion, Fire/Spectacle, Food & Drink, For Kids, Games, Gathering/Party, Live Music, Mature Audiences, Miscellaneous, Parade, Performance, Repair, Ritual/Ceremony, Self Care, Sustainability/Greening Your Burn, Yoga/Movement/Fitness

  // Palette: Arts & Crafts, For Kids

  // Grad Cap: Class/Workshop, Diversity & Inclusion, Parade, Ritual/Ceremony

  // Mic: Live Music, Performance

  // Mug: Food & Drink, Self Care

  // Bolt: Fire/Spectacle, Sustainability/Greening Your Burn, Yoga/Movement/Fitness

  // TBD: Games, Gathering/Party, Mature Audiences, Misc, Repair

  return (
    <>
      {category.includes("Arts & Crafts" || "For Kids") ? <CatArt /> : ""}
      {category.includes(
        "Class/Workshop" ||
          "Diversity & Inclusion" ||
          "Parade" ||
          "Ritual/Ceremony" ||
          "Mature Audiences"
      ) ? (
        <CatClass />
      ) : (
        ""
      )}
      {category.includes(
        "Live Music" || "Performance" || "Games" || "Gathering/Party"
      ) ? (
        <CatEntertainment />
      ) : (
        ""
      )}
      {category.includes("Food & Drink" || "Self Care" || "Miscellaneous") ? (
        <CatFoodBev />
      ) : (
        ""
      )}
      {category.includes(
        "Fire/Spectacle" ||
          "Sustainability/Greening Your Burn" ||
          "Yoga/Movement/Fitness" ||
          "Repair"
      ) ? (
        <CatMisc />
      ) : (
        ""
      )}
    </>
  );
}

export default CatIcon;

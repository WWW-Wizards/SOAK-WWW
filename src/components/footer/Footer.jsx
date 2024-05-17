import React from "react";
import { Tab } from "./Tab";

const TABS = {
  DAILY: "#333333",
  THU: "#02597F",
  FRI: "#1FB2A3",
  SAT: "#FAAF40",
  SUN: "#D9533D",
};

export const Footer = () => {
  return (
    <div className="footer-tab-wrapper">
      {Object.keys(TABS).map((day, index) => (
        <Tab day={day} key={index} />
      ))}
    </div>
  );
};

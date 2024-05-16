import React from "react";
import { useTabs } from "../../state/StateProvider";

export const Tab = ({ day, color }) => {
  const { activeTab, handleTabClick } = useTabs();

  return (
    <div className="footer-tabs">
      <button
        className={activeTab === day ? "footer-tab-active" : ""}
        style={{ "--day-color": color }}
        onClick={() => handleTabClick(day)}
      >
        {day}
      </button>
    </div>
  );
};

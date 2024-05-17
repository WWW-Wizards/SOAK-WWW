import React from "react";
import { useTabs } from "../../state/StateProvider";

export const Tab = ({ day }) => {
  const { activeTab, handleTabClick } = useTabs();

  return (
    <div className={activeTab === day ? "footer-tab-active" : "footer-tabs"}>
      <button onClick={() => handleTabClick(day)}>{day}</button>
    </div>
  );
};

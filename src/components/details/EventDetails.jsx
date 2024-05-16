import React from "react";
import { useFilter } from "../../state/StateProvider";

export const EventDetails = (event) => {
  const { handleToggleFavorited, handleFavoriteDisplay } = useFilter();

  const date = {
    Thursday: "#75d4f5",
    Friday: "#A6f9b1",
    Saturday: "#Eff9a6",
    Sunday: "#F9e0a6",
  };

  return (
    <div
      className="event-details"
      style={{ "--date-color": [date[event.day]] }}
    >
      <div className="event-details-title">
        <div>
          {event.when} {event.day}
        </div>
        <div>{event.where}</div>
      </div>
      <div className="event-details-pill-group">
        {/* TODO: Some events do not have an "area" (as in "The Gas Station") */}
        <div>{event.area}</div>
        <div>{event.eventType.toLowerCase()}</div>
      </div>
      <div className="event-details-description">{event.what}</div>
      <div
        className="event-details-favorites-svg-wrapper"
        onClick={() => handleToggleFavorited(event.id)}
      >
        <svg
          className={`event-details-favorites-svg ${handleFavoriteDisplay(
            event.id
          )}`}
          viewBox="0 0 24 24"
        >
          <path d="M12 2L9.14 8.8 2 9.56l6.18 5.34L5.82 21 12 17.27 18.18 21l-2.36-6.1L22 9.56l-7.14-.76L12 2z"></path>
        </svg>
      </div>
    </div>
  );
};

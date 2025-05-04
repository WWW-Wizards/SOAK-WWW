import React, { useState } from "react";

function EventDescription({ event }) {
  const [showMore, setShowMore] = useState(false);
  const MAX_LENGTH = 175;
  const description = event.description;

  if (description.length <= MAX_LENGTH) {
    return (
      <section className="event-details-container">
        <div className="event-details-title">{event.title}</div>
        <p className="event-details-description">{description}</p>
      </section>
    );
  }

  return (
    <div>
      {description.length > MAX_LENGTH && showMore === false ? (
        <section className="event-details-container">
          <div className="event-details-title">{event.title}</div>
          <p className="event-details-description">
            {`${description.substring(0, MAX_LENGTH)}...`}
            <button
              className="event-details-description-more"
              style={{ color: "#6169ff" }}
              onClick={() => setShowMore(true)}
            >
              Read more
            </button>
          </p>
        </section>
      ) : (
        <section className="event-details-container">
          <div className="event-details-title">{event.title}</div>
          <p className="event-details-description">
            {description}
            <button
              className="event-details-description-more"
              style={{ color: "#6169ff" }}
              onClick={() => setShowMore(false)}
            >
              Show less
            </button>
          </p>
        </section>
      )}
    </div>
  );
}

export default EventDescription;

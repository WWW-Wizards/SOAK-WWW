import React, { useState } from "react";

function EventDescription({ event, area }) {
  const [showMore, setShowMore] = useState(false);
  const MAX_LENGTH = 175;
  const description = event.what;

  if (event.what.length <= MAX_LENGTH) {
    return <p className="event-details-description">{description}</p>;
  }

  return (
    <div>
      {description.length > MAX_LENGTH && showMore === false ? (
        <div className="event-details-description">
          {`${description.substring(0, MAX_LENGTH)}...`}
          <button
            className="event-details-description-more"
            style={{ "--area-color": [area[event.area]] }}
            onClick={() => setShowMore(true)}
          >
            Read more
          </button>
        </div>
      ) : (
        <p className="event-details-description">
          {description}
          <button
            className="event-details-description-more"
            style={{ "--area-color": [area[event.area]] }}
            onClick={() => setShowMore(false)}
          >
            Show less
          </button>
        </p>
      )}
    </div>
  );
}

export default EventDescription;

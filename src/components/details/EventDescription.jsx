import React, { useState } from "react";

function EventDescription({ description }) {
  const [showMore, setShowMore] = useState(false);
  const MAX_LENGTH = 175;

  if (description.length <= MAX_LENGTH) {
    return <p className="event-details-description">{description}</p>;
  }

  return (
    <div>
      {description.length > MAX_LENGTH && showMore === false ? (
        <div className="event-details-description">
          {`${description.substring(0, MAX_LENGTH)}...`}
          <button
            className="event-details-description-more"
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

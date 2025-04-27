import React from "react";
import Save from "./icons/Save";
import Saved from "./icons/Saved";

import { useFilter } from "../../state/StateProvider";

function FavIcon({ event }) {
  const { handleFavoriteDisplay, handleToggleFavorited } = useFilter();
  return (
    <div>
      {handleFavoriteDisplay(event.uid) ? (
        <Saved
          className="event-details-fav"
          onClick={() => handleToggleFavorited(event.uid)}
        />
      ) : (
        <Save
          className="event-details-fav"
          onClick={() => handleToggleFavorited(event.uid)}
        />
      )}
    </div>
  );
}

export default FavIcon;

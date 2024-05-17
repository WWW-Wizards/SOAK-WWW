import React from "react";
import Save from "./icons/Save";
import Saved from "./icons/Saved";

import { useFilter } from "../../state/StateProvider";

function FavIcon({ event }) {
  const { handleFavoriteDisplay, handleToggleFavorited } = useFilter();
  return (
    <div>
      {handleFavoriteDisplay(event.id) ? (
        <Saved
          className="event-details-fav"
          onClick={() => handleToggleFavorited(event.id)}
        />
      ) : (
        <Save
          className="event-details-fav"
          onClick={() => handleToggleFavorited(event.id)}
        />
      )}
    </div>
  );
}

export default FavIcon;

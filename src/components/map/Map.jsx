import React from "react";

const imageUrl = new URL("SOAK2025_Map.png", import.meta.url);

function PDFViewer() {
  return (
    <div className="map-container">
      <img className="map" src={imageUrl} alt="SOAK Map" />
    </div>
  );
}

export default PDFViewer;

import React from "react";
import "./SponsorsGrid.css";

const SponsorsGrid = () => {
  return (
    <div className="cyber-grid-container">
      {/* Main Background Grid */}
      <div className="grid-lines"></div>

      {/* Optional: 3D Floor Grid for extra "Cyber" feel */}
      <div className="grid-floor"></div>

      {/* Radial darkening mask to focus on the center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#030308_100%)]"></div>
    </div>
  );
};

export default SponsorsGrid;

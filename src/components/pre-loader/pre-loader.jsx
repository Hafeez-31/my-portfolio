import React from "react";
import "./pre-loader.css";

const Preloader = () => {
  return (
    <div id="preloader">
      <div className="loader-container">
        <div className="loader-ring"></div>
        <div className="loader-ring ring-2"></div>
        <div className="loader-logo">HA</div>
      </div>
    </div>
  );
};

export default Preloader;
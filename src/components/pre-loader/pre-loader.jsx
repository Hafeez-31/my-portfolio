import React from "react";
import "./pre-loader.css";

const Preloader = () => {
  return (
    <div id="preloader">
      <div className="loader-wrapper">
        <div className="orbit">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="loader-text">HA</div>
      </div>
    </div>
  );
};

export default Preloader;

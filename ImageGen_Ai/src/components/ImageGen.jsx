import React from "react";
import "./ImageGen.css";
import defaultImage from "../assets/Default.png";
const ImageGen = () => {
  return (
    <div className="container">
      <div className="header">
        <span id="ImageText">Image </span>
        <span id="GeneratorText">Generator</span>
      </div>

      <div className="image-loader">
        <img src={defaultImage} alt="Default" className="default-image" />
      </div>
      <div className="wrap-input-14">
        <input className="input" type="text" placeholder="Search Here" />
        <span className="focus-bg"></span>
      </div>
    </div>
  );
};

export default ImageGen;

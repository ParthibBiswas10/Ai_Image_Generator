import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState, useEffect, useRef } from "react";
import "./ImageGen.css";
import defaultImage from "../assets/Default.png";
const ImageGen = () => {
  const [imagesrc, setImageSrc] = useState(defaultImage);
  const apiKey = import.meta.env.VITE_API_KEY;
  const inputref = useRef(null);

  const generateImage = () => {
    console.log("Image generation triggered");
    console.log("Prompt:", inputref.current?.value);
  };
  return (
    <div className="container">
      <div className="header">
        <span id="ImageText">Image </span>
        <span id="GeneratorText">Generator </span>
      </div>

      <div className="image-loader">
        <img src={defaultImage} alt="Default" className="default-image" />
      </div>
      <div className="searchbox">
        <div className="wrap-input-14">
          <input
            className="input"
            type="text"
            placeholder="Enter Prompt"
            ref={inputref}
          />
          <span className="focus-bg"></span>
          <div className="btn" onClick={generateImage}>
            Search
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGen;

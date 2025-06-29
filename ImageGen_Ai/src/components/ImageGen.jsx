import React, { useState, useRef } from "react";
import { GoogleGenAI, Modality } from "@google/genai";
import "./ImageGen.css";
import defaultImage from "../assets/Default.png";

const ImageGen = () => {
  const [ImageSrc, setImageSrc] = useState(defaultImage);
  const [loading, setLoading] = useState(false);

  const key = import.meta.env.VITE_API_KEY;
  const inputref = useRef(null);

  const generateImage = async () => {
    try {
      const prompt = inputref.current.value;
      if (!prompt) {
        alert("Please enter a prompt to generate an image.");
        return;
      }

      setLoading(true);
      const api = new GoogleGenAI({ apiKey: key });

      const response = await api.models.generateContent({
        model: "gemini-2.0-flash-preview-image-generation",
        contents: [{ text: prompt }],
        config: {
          responseModalities: [Modality.TEXT, Modality.IMAGE],
        },
      });

      const parts = response.candidates[0].content.parts;
      for (const part of parts) {
        if (part.inlineData) {
          const base64 = part.inlineData.data;
          setImageSrc(`data:image/png;base64,${base64}`);
          inputref.current.value = ""; // Clear the input field after generation
        }
      }
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Error generating image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <span id="ImageText">Image </span>
        <span id="GeneratorText">Generator </span>
      </div>

      <div className="image-loader">
        <img src={ImageSrc} alt="Generated" className="generated-image" />
        {loading && (
          <div className="loading-container">
            <div className="loader">Generating Image...</div>
            <div className="loading-bar-container">
              <div className="loading-bar"></div>
            </div>
          </div>
        )}
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

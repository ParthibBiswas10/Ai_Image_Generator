import React, { useState, useRef } from "react";
import { GoogleGenAI, Modality } from "@google/genai";
import "./ImageGen.css";
import defaultImage from "../assets/Default.png";

const ImageGen = () => {
  const [ImageSrc, setImageSrc] = useState(defaultImage);
  const [loading, setLoading] = useState(false);

  const key = import.meta.env.VITE_GEMINI_API_KEY;
  const inputref = useRef(null);

  // FuNCtion to create blur text effect
  const createBlurText = (text, className) => {
    return text.split("").map((char, index) => (
      <span
        className={`blur-char ${className}`}
        style={{
          animationDelay: `${index * 0.2}s`,
          display: char === " " ? "inline" : "inline-block",
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };
  //Blur Text end
  const downloadImage = (imageSrc) => {
    try {
      // Create a temporary link element
      const link = document.createElement("a");
      link.href = imageSrc;
      link.download = `Parthib-Ai-Image-Generator.png`;

      // Append to body, click, and remove
      //document.body.appendChild(link);
      console.log(link);
      link.click();
      //document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading image:", error);
      alert("Error downloading image. Please try again.");
    }
  };

  const generateImage = async () => {
    try {
      const prompt = inputref.current.value;
      if (!prompt) {
        alert("Please enter a prompt to generate an image.");
        return;
      }

      // Check if API key is available
      if (!key) {
        console.error("API key is missing");
        alert(
          "API key is not configured. Please check your environment variables."
        );
        return;
      }

      console.log("Starting image generation...");
      setLoading(true);

      const api = new GoogleGenAI({ apiKey: key });

      const response = await api.models.generateContent({
        model: "models/gemini-1.5-flash",
        contents: [{ text: prompt }],
        config: {
          responseModalities: [Modality.TEXT, Modality.IMAGE],
        },
      });

      console.log("Response received:", response);

      if (!response.candidates || response.candidates.length === 0) {
        throw new Error("No candidates returned from API");
      }

      const parts = response.candidates[0].content.parts;
      console.log("Parts received:", parts);

      let imageFound = false;
      for (const part of parts) {
        if (part.inlineData) {
          const base64 = part.inlineData.data;
          setImageSrc(`data:image/png;base64,${base64}`);
          inputref.current.value = ""; // Clear the input field after generation
          imageFound = true;
          console.log("Image generated successfully");
          break;
        }
      }

      if (!imageFound) {
        throw new Error("No image data found in response");
      }
    } catch (error) {
      console.error("Detailed error information:", {
        message: error.message,
        stack: error.stack,
        name: error.name,
        cause: error.cause,
      });

      let errorMessage = "Error generating image. ";

      if (error.message?.includes("API key")) {
        errorMessage += "Invalid API key.";
      } else if (error.message?.includes("quota")) {
        errorMessage += "API quota exceeded.";
      } else if (
        error.message?.includes("network") ||
        error.message?.includes("fetch")
      ) {
        errorMessage += "Network error. Please check your connection.";
      } else {
        errorMessage += "Please try again or check the console for details.";
      }

      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <span id="ImageText">{createBlurText("Image ", "image-blur")}</span>
        <span id="GeneratorText">
          {createBlurText("Generator ", "generator-blur")}
        </span>
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

        {ImageSrc !== defaultImage && !loading && (
          <button
            className="download-btn"
            onClick={() => downloadImage(ImageSrc)}
          >
            Download Image
          </button>
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

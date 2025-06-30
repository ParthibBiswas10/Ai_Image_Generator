import { useState } from "react";
import "./App.css";
import ImageGen from "./components/ImageGen";
import Particles from "../effect/Particles/Particles";

function App() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Particles
        particleCount={1000}
        particleColors={["#ff69b4", "#00ff88", "#0088ff", "#ffffff"]}
        particleSpread={15}
        speed={1.5}
        particleBaseSize={150}
        moveParticlesOnHover={true}
        alphaParticles={true}
        particleHoverFactor={2}
      />
      <div style={{ position: "relative", zIndex: 100 }}>
        <ImageGen />
      </div>
    </div>
  );
}

export default App;

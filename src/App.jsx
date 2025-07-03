import { useState } from "react";
import "./App.css";
import ImageGen from "./components/ImageGen.jsx";
import Particles from "../effect/Particles/Particles";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "auto",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <Particles
          particleCount={900}
          particleColors={["#ff69b4", "#00ff88", "#0088ff", "#ffffff"]}
          particleSpread={15}
          speed={1.5}
          particleBaseSize={150}
          moveParticlesOnHover={true}
          alphaParticles={true}
          particleHoverFactor={2}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          pointerEvents: "auto",
        }}
      >
        <ImageGen />
      </div>
      <div style={{ position: "relative", zIndex: 10 }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;

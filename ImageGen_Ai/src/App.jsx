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
      <div style={{ position: "relative", zIndex: 100 }}>
        <ImageGen />
      </div>
      <div style={{ position: "relative", zIndex: 100 }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;

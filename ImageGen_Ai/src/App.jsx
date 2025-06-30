import { useState } from "react";
import "./App.css";
import ImageGen from "./components/ImageGen";
import DotGrid from "../effect/DotGrid/DotGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <DotGrid />
      <div style={{ position: "relative", zIndex: 10 }}>
        <ImageGen />
      </div>
    </div>
  );
}

export default App;

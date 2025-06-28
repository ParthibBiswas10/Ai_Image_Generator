import { useState } from "react";
import "./App.css";
import ImageGen from "./components/ImageGen";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ImageGen />
    </>
  );
}

export default App;

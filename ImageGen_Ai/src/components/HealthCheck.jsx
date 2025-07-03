import React from "react";

const HealthCheck = () => {
  const checkEnvironment = () => {
    const results = {
      apiKey: !!import.meta.env.VITE_API_KEY,
      apiKeyLength: import.meta.env.VITE_API_KEY?.length || 0,
      environment: import.meta.env.MODE,
      timestamp: new Date().toISOString(),
    };

    console.log("Environment Check:", results);
    alert(`Environment Check:\n${JSON.stringify(results, null, 2)}`);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: 1000,
        background: "rgba(0,0,0,0.8)",
        color: "white",
        padding: "5px 10px",
        borderRadius: "5px",
        fontSize: "12px",
      }}
    >
      <button
        onClick={checkEnvironment}
        style={{
          background: "transparent",
          border: "1px solid white",
          color: "white",
          padding: "2px 8px",
          borderRadius: "3px",
          cursor: "pointer",
        }}
      >
        Health Check
      </button>
    </div>
  );
};

export default HealthCheck;

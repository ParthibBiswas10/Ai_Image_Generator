import React from "react";

const HealthCheck = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        background: "rgba(0,255,0,0.8)",
        padding: "5px 10px",
        borderRadius: "5px",
        fontSize: "12px",
        zIndex: 9999,
      }}
    >
      App Running ✓
    </div>
  );
};

export default HealthCheck;

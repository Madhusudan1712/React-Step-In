import React from "react";
import "./LowBattery.css";

function LowBattery({ onDismiss }) {
  return (
    <div className="low-battery-overlay">
      <div className="low-battery-dialog">
        <div className="low-battery-icon">🔋</div>
        <h2 className="low-battery-title">Low Battery</h2>
        <p className="low-battery-message">
          Your device's battery is running low. Please connect to a charger.
        </p>
        <button className="low-battery-button" onClick={onDismiss}>
          Dismiss
        </button>
      </div>
    </div>
  );
}

export default LowBattery;

import React, { useState } from "react";

function Extra() {
  const [radius, setRadius] = useState(0);
  const [pressureGradient, setPressureGradient] = useState(0);
  const [viscosity, setViscosity] = useState(0);
  const [length, setLength] = useState(0);
  const [flowRate, setFlowRate] = useState(0);

  function calculateFlowRate(e) {
    e.preventDefault();
    const flowRateValue =
      ((Math.PI * radius * 4 * pressureGradient) / (8 * viscosity * length)) *
      1000;
    setFlowRate(flowRateValue.toFixed(2));
  }

  return (
    <div>
      <h1>Poiseuille's Equation Calculator</h1>
      <form onSubmit={calculateFlowRate}>
        <label>
          Radius (m):
          <input
            type="number"
            step="0.0001"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
          />
        </label>
        <br />
        <label>
          Pressure Gradient (Pa/m):
          <input
            type="number"
            step="0.0001"
            value={pressureGradient}
            onChange={(e) => setPressureGradient(e.target.value)}
          />
        </label>
        <br />
        <label>
          Viscosity (Pa s):
          <input
            type="number"
            step="0.0001"
            value={viscosity}
            onChange={(e) => setViscosity(e.target.value)}
          />
        </label>
        <br />
        <label>
          Length (m):
          <input
            type="number"
            step="0.0001"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Calculate Flow Rate</button>
      </form>
      <br />
      {flowRate !== 0 && (
        <p>Flow Rate: {flowRate} L/s</p>
      )}
    </div>
  );
}

export default Extra;

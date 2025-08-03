import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const conversionRate = 0.011; // Example rate
    setEuro((rupees * conversionRate).toFixed(2));
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter Rupees"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {euro && <p>{rupees} INR = {euro} EUR</p>}
    </div>
  );
}

export default CurrencyConvertor;

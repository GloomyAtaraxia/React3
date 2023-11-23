import React, { useState } from 'react';
import './TemperatureConverter.css';

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('Celsius');
  const [convertedTemperature, setConvertedTemperature] = useState(null);

  const handleTemperatureInput = (event) => {
    setTemperature(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const convertTemperature = () => {
    if (temperature !== '') {
      if (unit === 'Celsius') {
        setConvertedTemperature((parseFloat(temperature) * 9/5) + 32);
      } else {
        setConvertedTemperature((parseFloat(temperature) - 32) * 5/9);
      }
    } else {
      setConvertedTemperature(null);
    }
  };

  return (
    <div className="temperature-converter">
        <hr></hr>
      <label htmlFor="temperature">Temperature:</label>
      <input
        type="number"
        id="temperature"
        value={temperature}
        onChange={handleTemperatureInput}
        placeholder="Enter temperature"
      />

      <label htmlFor="unit">Unit:</label>
      <select id="unit" value={unit} onChange={handleUnitChange}>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
      </select>

      <button onClick={convertTemperature}>Convert</button>

      {convertedTemperature !== null && (
        <p>Converted Temperature: {convertedTemperature.toFixed(2)} {unit === 'Celsius' ? 'Fahrenheit' : 'Celsius'}</p>
      )}
      <hr></hr>
    </div>
  );
};

export default TemperatureConverter;

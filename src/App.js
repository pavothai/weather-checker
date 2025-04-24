import React, { useState } from 'react';
import './App.css';

function App() {
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const steps = [
    "Finding location...",
    "Analyzing weather...",
    "Gathering information...",
    "Almost done..."
  ];

  const handleStart = async () => {
    if (!location.trim()) {
      alert("Please enter a location.");
      return;
    }

    setIsRunning(true);
    for (let i = 0; i < steps.length; i++) {
      setStatus(`${steps[i]} (${location})`);
      setProgress((i + 1) * (100 / steps.length));
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    setStatus('');
    setIsRunning(false);
    alert("Just look outside the window!");
  };

  return (
    <div className="App">
      <h1>Weather Info Assistant</h1>
      <input
        type="text"
        placeholder="Enter your location"
        value={location}
        onChange={e => setLocation(e.target.value)}
        disabled={isRunning}
      />
      <br /><br />
      <button onClick={handleStart} disabled={isRunning}>Start</button>
      <p>{status}</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}>{Math.round(progress)}%</div>
      </div>
    </div>
  );
}

export default App;
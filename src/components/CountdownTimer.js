import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(0);
  };
  const handleTimeChange = (event) => setTimeLeft(parseInt(event.target.value));

  return (
    <div className="countdown-timer">
      <input
        type="number"
        value={timeLeft}
        onChange={handleTimeChange}
        disabled={isRunning}
      />
      <button onClick={handleStart} disabled={isRunning || timeLeft === 0}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={handleReset} disabled={isRunning && timeLeft !== 0}>
        Reset
      </button>
      <div className="time-display">
        {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
      </div>
    </div>
  );
};

export default CountdownTimer;

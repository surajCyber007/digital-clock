import React, { useState } from 'react';
import './App.css';
import DateTime from './components/DateTime';
import CountdownTimer from './components/CountdownTimer';
import Stopwatch from './components/Stopwatch';
import WorldClock from './components/WorldClock';
import Alarm from './components/Alarm';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${theme}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <DateTime />
      <CountdownTimer />
      <Stopwatch />
      <WorldClock />
      <Alarm />
    </div>
  );
};

export default App;

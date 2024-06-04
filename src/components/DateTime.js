import React, { useState, useEffect } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import moment from 'moment-timezone';
import './DateTime.css';

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const [dateFormat, setDateFormat] = useState('long');
  const [timeFormat, setTimeFormat] = useState('HH:mm:ss');
  const [timezone, setTimezone] = useState(moment.tz.guess());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleDateChange = (event) => setDateFormat(event.target.value);
  const handleTimeChange = (event) => setTimeFormat(event.target.value);
  const handleTimezoneChange = (event) => setTimezone(event.target.value);

  return (
    <div className="date-time-container">
      <div className="date">{currentTime.tz(timezone).format('LL')}</div>
      <div className="time">{currentTime.tz(timezone).format(timeFormat)}</div>
      <div className="analog-clock">
        <Clock value={new Date(currentTime.tz(timezone).format())} />
      </div>
      <div className="controls">
        <label>
          Date Format:
          <select value={dateFormat} onChange={handleDateChange}>
            <option value="numeric">Numeric</option>
            <option value="2-digit">2-digit</option>
            <option value="short">Short</option>
            <option value="long">Long</option>
          </select>
        </label>
        <label>
          Time Format:
          <select value={timeFormat} onChange={handleTimeChange}>
            <option value="HH:mm:ss">HH:mm:ss</option>
            <option value="hh:mm:ss A">hh:mm:ss A</option>
          </select>
        </label>
        <label>
          Timezone:
          <select value={timezone} onChange={handleTimezoneChange}>
            {moment.tz.names().map((tz) => (
              <option key={tz} value={tz}>
                {tz}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default DateTime;

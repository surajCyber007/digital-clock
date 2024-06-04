import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './Alarm.css';

const Alarm = () => {
  const [alarms, setAlarms] = useState([]);
  const [alarmTime, setAlarmTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment().format('HH:mm');
      alarms.forEach((alarm) => {
        if (alarm.time === now) {
          alert(`Alarm for ${alarm.time}!`);
          setAlarms(alarms.filter((a) => a.time !== alarm.time));
        }
      });
    }, 60000);

    return () => clearInterval(interval);
  }, [alarms]);

  const addAlarm = () => {
    if (alarmTime && !alarms.find((alarm) => alarm.time === alarmTime)) {
      setAlarms([...alarms, { time: alarmTime }]);
    }
    setAlarmTime('');
  };

  return (
    <div className="alarm">
      <div className="set-alarm">
        <input
          type="time"
          value={alarmTime}
          onChange={(e) => setAlarmTime(e.target.value)}
        />
        <button onClick={addAlarm}>Set Alarm</button>
      </div>
      <div className="alarm-list">
        {alarms.map((alarm) => (
          <div key={alarm.time} className="alarm-item">
            {alarm.time}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alarm;

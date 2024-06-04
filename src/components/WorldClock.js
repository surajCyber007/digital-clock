import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import './WorldClock.css';
import Clock from 'react-clock';

const cities = ['America/New_York', 'Europe/London', 'Asia/Tokyo', 'Australia/Sydney'];

const WorldClock = () => {
    const [times, setTimes] = useState({});
    const [currentTime, setCurrentTime] = useState(moment());


    useEffect(() => {
        const timer = setInterval(() => {
            const currentTimes = {};
            cities.forEach((city) => {
                currentTimes[city] = moment().tz(city).format('HH:mm:ss');
            });
            setTimes(currentTimes);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(moment());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="world-clock">
            {cities.map((city) => (
                <div key={city} className="city">
                    <div className="city-name">{city}</div>
                    <div className="city-time">{times[city]}</div>
                    <div className="analog-clock">
                        <Clock value={times[city]} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WorldClock;

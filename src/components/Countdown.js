import React, { useState, useEffect, useCallback } from "react";
import "./Countdown.css"; // Ensure this CSS file exists

const Countdown = () => {
  const targetDate = new Date("August 25, 2025 00:00:00").getTime();

  const getTimeRemaining = useCallback(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    return {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
    };
  }, [targetDate]);

  const [time, setTime] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, [getTimeRemaining]);

  return (
    <div className="countdown">
      {time.days}d : {time.hours}h : {time.minutes}m : {time.seconds}s
    </div>
  );
};

export default Countdown;

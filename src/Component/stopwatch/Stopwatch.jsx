import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Increment by 10ms
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval); // Cleanup on unmount or status change
  }, [isRunning]);

  const formatTime = (time) => {
    const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
    const minutes = `0${Math.floor(time / 60000) % 60}`.slice(-2);
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      <div>
        {!isRunning ? (
          <button onClick={() => setIsRunning(true)}>Start</button>
        ) : (
          <button onClick={() => setIsRunning(false)}>Pause</button>
        )}
      </div>
    </div>
  );
};

export default Stopwatch;



// import React from 'react';
// import './Stopwatch.css';
// export default function Stopwatch() {
//     return (
//         <>
//         <div>Stopwatch</div>
//         <div className="timer">00:00:00</div>
//         <div className="buttons">
//             <button className="start">Start</button>
//             <button className="stop">Stop</button>
//         </div>
//         </>

//     );
// }
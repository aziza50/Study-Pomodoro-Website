import React from "react";
//we'll use a timer library provided by react
import { useTimer } from "react-timer-hook";
//In React, we use PascalCasing!
export default function Timer() {
  const time = new Date();
  //the library wants us to tell the exact future time to stop
  time.setMinutes(time.getMinutes() + 50);

  const { minutes, seconds, hours, start, pause, resume, restart, reset } =
    useTimer({
      expiryTimestamp: time,
      onExpire: () => console.warn("Time is Up!"),
      autoStart: false,
    });

  return (
    <>
      <div className="text-[#E58B98] text-center justify-items-center text-8xl font-extralight flex flex-row ">
        <h1>{minutes}</h1>
        <h1>:</h1>
        <h1>{seconds < 10 ? `0${seconds}` : seconds}</h1>
      </div>
      <div className="flex flex-row"></div>
      <div className="justify-center text-[#E58B98] text-3xl flex flex-row gap-10">
        <button onClick={start}>Start</button>
        <button
          onClick={() =>
            restart(new Date(new Date().getTime() + 50 * 60 * 1000), false)
          }
        >
          Reset
        </button>
      </div>
    </>
  );
}

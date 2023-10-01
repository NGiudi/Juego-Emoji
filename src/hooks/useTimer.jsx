import React from "react";

import { formatClock, getTimeObject } from "../utils/clock";

export const useTimer = (interval) => { 
  const [isFinished, setIsFinished] = React.useState(false);
  const [time, setTime] = React.useState(null);

  const timeoutRef = React.useRef(null);
  const endTime = React.useRef(0);

  const startTimeout = () => {
    //? if a timer already exists, it stops.
    stop();
    
    //? create timer.
    timeoutRef.current = setTimeout(() => {
      const currentTime = endTime.current - new Date().getTime();
      
      setTime(currentTime);
      
      if (currentTime < 1000) {
        setIsFinished(true);
      } else {
        startTimeout();
      }
    }, 1000);
  }

  const start = () => {
    endTime.current = new Date().getTime() + interval + 100;
    setIsFinished(false);
    setTime(interval);
    startTimeout();
  }

  const stop = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  //? clear timer when unmounted component.
  React.useEffect(() => {
    return stop;
  }, []);

  return {
    isFinished,
    start,
    stop,
    time: formatClock(getTimeObject(time)),
  };
}

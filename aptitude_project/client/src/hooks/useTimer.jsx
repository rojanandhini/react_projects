import React from "react";
import { useState, useEffect } from "react";
const useTimer = () => {
  const [second, setSecond] = useState(3600);
  useEffect(() => {
    if (second <= 1) return;
    const interval = setInterval(() => {
      setSecond((s) => s - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [second]);
  const minute = Math.floor(second / 60);
  const seconds = second % 60;
  return (
    <div>
      Time Remaining: {minute}:{seconds.toString().padStart(2, '0')}
    </div>
  );
};

export default useTimer;

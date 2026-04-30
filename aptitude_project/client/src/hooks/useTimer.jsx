import { useState, useEffect } from "react";

const useTimer = (initialMinutes = 45) => {
  const [secondsLeft, setSecondsLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const interval = setInterval(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  const timeDisplay = `${minutes}:${secs.toString().padStart(2, '0')}`;

  return { secondsLeft, timeDisplay };
};

export default useTimer;

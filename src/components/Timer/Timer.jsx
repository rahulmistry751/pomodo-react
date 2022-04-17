import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Timer.css";
let timer;
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);

      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(60 - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds, minutes]);

  const play = () => {
    clearInterval(timer);
    timer = setInterval(() => {
      setSeconds(seconds - 1);

      if (seconds === 60) {
        setMinutes(minutes - 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  };

  const pause = () => {
    clearInterval(timer);
  };

  const reset = () => {
    setSeconds(0);
    setMinutes(25);
  };

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="todos-container pomodoro-container">
      <div className="timer-container">
        <CircularProgressbar
          value={minutes}
          text={`${timerMinutes}:${timerSeconds}`}
          maxValue={25}
          minValue={0}
          styles={buildStyles({
            pathColor: "var(--primary)",
            textColor: "var(--primary)",
          })}
        />
        <div className="timer-controls">
          <span className="timer-start" onClick={play}>
            <i className="fas fa-play fa-2x"></i>
          </span>
          <span className="timer-pause" onClick={pause}>
            <i className="fas fa-pause fa-2x"></i>
          </span>
          <span className="button timer-reset fs-24" onClick={reset}>
            Reset
          </span>
        </div>
      </div>
      <div className="task-container">
        <h3 className="h3 fw-600 task-heading">Get it done!</h3>
      </div>
    </div>
  );
};
export { Timer };

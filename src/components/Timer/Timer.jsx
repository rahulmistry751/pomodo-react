import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Timer.css";
const timer = "25:00";
const Timer = () => {
  return (
    <div className="todos-container pomodoro-container">
      <div className="timer-container">
        <CircularProgressbar
          value={timer}
          text={timer}
          styles={buildStyles({
            pathColor: "var(--primary)",
            textColor: "var(--primary)",
          })}
        />
        <div className="timer-controls">
          <span className="timer-start">
            <i className="fas fa-play fa-2x"></i>
          </span>
          <span className="timer-pause">
            <i className="fas fa-pause fa-2x"></i>
          </span>
          <span className="button timer-reset fs-24">Reset</span>
        </div>
      </div>
      <div className="task-container">
        <h3 className="h3 fw-600 task-heading">Today's task</h3>
      </div>
    </div>
  );
};
export { Timer };

import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="pomodoro-sidebar">
      <div className="pomodoro-brandname h1 fw-900">
        <Link to="/" className="pomodoro-brandname">
          Pomodo
        </Link>
      </div>
      <ul className="list">
        <li className="list-item">
          <Link to="/" className="h3 fw-600 txt-c">
            Todos
          </Link>
        </li>
        <li className="list-item">
          <Link to="/timer" className="h3 fw-600 txt-c">
            Timer
          </Link>
        </li>
        <li className="list-item h3 fw-600 txt-c">Stats</li>
      </ul>
    </div>
  );
};
export { Sidebar };

import { Link } from "react-router-dom";
import "./Todos.css";
const Todos = () => {
  return (
    <div className="todos-container">
      <div className="todos-header">
        <h3 className="todos-heading h2 fw-600">To-Do list</h3>
        <span className="todos-new-add">
          <i className="fas fa-plus-circle fa-2x"></i>
        </span>
      </div>
      <ul className="list todos-list">
        <li className="list-item todos-item">
          <Link to="/timer" className="todo-title fs-20">
            Complete video library
          </Link>
          <div className="todo-action-controls">
            <span className="todo-edit">
              <i className="fas fa-edit fa-lg"></i>
            </span>
            <span className="todo-delete">
              <i className="fas fa-trash-alt fa-lg"></i>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};
export { Todos };

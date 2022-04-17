import { Link } from "react-router-dom";
import { useTodos } from "../../context/todos-context";
import { TODOS_ACTIONS } from "../../utils";
import "./Todos.css";
const Todos = () => {
  const { todoDispatch, todoState } = useTodos();
  return (
    <div className="todos-container">
      <div className="todos-header">
        <h3 className="todos-heading h2 fw-600">To-Do list</h3>
        <span
          className="todos-new-add"
          onClick={() => todoDispatch({ type: TODOS_ACTIONS.MODAL_TOGGLE })}
        >
          <i className="fas fa-plus-circle fa-2x"></i>
        </span>
      </div>
      <ul className="list todos-list">
        {todoState.todos.length ? (
          todoState.todos.map((todo) => {
            return (
              <li className="list-item todos-item" key={todo.id}>
                <Link to="/timer" className="todo-title fs-20 fw-600">
                  {todo.title}
                </Link>
                <div className="todo-action-controls">
                  <span
                    className="todo-edit"
                    onClick={() => {
                      todoDispatch({
                        type: TODOS_ACTIONS.EDIT_TODO,
                        payload: { todoToEdit: todo },
                      });
                    }}
                  >
                    <i className="fas fa-edit fa-lg"></i>
                  </span>
                  <span
                    className="todo-delete"
                    onClick={() => {
                      todoDispatch({
                        type: TODOS_ACTIONS.REMOVE_TODO,
                        payload: { todoId: todo.id },
                      });
                    }}
                  >
                    <i className="fas fa-trash-alt fa-lg"></i>
                  </span>
                </div>
              </li>
            );
          })
        ) : (
          <div className="h2 txt-c">Let's start working</div>
        )}
      </ul>
    </div>
  );
};
export { Todos };

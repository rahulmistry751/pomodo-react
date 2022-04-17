import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useTodos } from "../../context/todos-context";
import { TODOS_ACTIONS } from "../../utils";
import "./Editor.css";
const Editor = () => {
  const { todoDispatch, todoState } = useTodos();

  const [todoData, setTodoData] = useState(
    todoState.todoEdit.id
      ? todoState.todoEdit
      : {
          id: uuid(),
          title: "",
          description: "",
        }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoData({ ...todoData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoData.title && todoData.description) {
      todoDispatch({
        type: TODOS_ACTIONS.ADD_TODO,
        payload: { todo: todoData },
      });
    }
  };
  return (
    <div className="modal-container">
      <div className="modal">
        <form className="editor-container" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              className="input"
              name="title"
              value={todoData.title}
              placeholder="Add title"
              required
              onChange={(e) => handleChange(e)}
            />
            <textarea
              className="input todo-description"
              value={todoData.description}
              name="description"
              maxLength="200"
              placeholder="Add description"
              required
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>
          <div className="editor-controls">
            <button
              className="button editor-cancel"
              onClick={() => todoDispatch({ type: TODOS_ACTIONS.MODAL_TOGGLE })}
            >
              Cancel
            </button>
            {todoState.todoEdit.id ? (
              <button type="submit" className="button editor-add">
                Edit
              </button>
            ) : (
              <button type="submit" className="button editor-add">
                Add
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export { Editor };

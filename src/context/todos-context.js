import { createContext, useContext, useReducer, useEffect } from "react";
import { todoReducer } from "../reducer";

const todoContext = createContext();

const TodoProvider = ({ children }) => {
  const todosLocal = JSON.parse(localStorage.getItem("todos"));
  const initialValue = {
    isModal: false,
    todos: todosLocal || [],
    todoEdit: {},
  };
  const [todoState, todoDispatch] = useReducer(todoReducer, initialValue);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoState.todos));
  }, [todoState.todos]);
  return (
    <todoContext.Provider value={{ todoState, todoDispatch }}>
      {children}
    </todoContext.Provider>
  );
};
const useTodos = () => {
  return useContext(todoContext);
};
export { TodoProvider, useTodos };

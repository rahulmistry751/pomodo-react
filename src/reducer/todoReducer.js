import { TODOS_ACTIONS } from "../utils";
let updatedTodos = [];
const todoReducer = (state, action) => {
  switch (action.type) {
    case TODOS_ACTIONS.MODAL_TOGGLE:
      return { ...state, isModal: !state.isModal, todoEdit: {} };
    case TODOS_ACTIONS.ADD_TODO:
      updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.todo.id ? action.payload.todo : todo
      );

      return state.todoEdit.id
        ? {
            ...state,
            todos: updatedTodos,
            isModal: false,
            todoEdit: {},
          }
        : {
            ...state,
            todos: [...state.todos, action.payload.todo],
            isModal: !state.isModal,
          };
    case TODOS_ACTIONS.EDIT_TODO:
      return {
        ...state,
        todoEdit: state.todos.reduce(
          (acc, curr) =>
            curr.id === action.payload.todoToEdit.id
              ? action.payload.todoToEdit
              : acc,
          {}
        ),
        isModal: !state.isModal,
      };
    case TODOS_ACTIONS.REMOVE_TODO:
      updatedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.todoId
      );
      return { ...state, todos: updatedTodos };
    default:
      return state;
  }
};
export { todoReducer };

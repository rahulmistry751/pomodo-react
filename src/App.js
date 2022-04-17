import "./App.css";
import { Sidebar, Todos, Timer, Editor } from "./components";
import { Routes, Route } from "react-router-dom";
import { useTodos } from "./context/todos-context";
function App() {
  const { todoState } = useTodos();
  return (
    <div className="wrapper">
      <div className="container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Todos />}></Route>
            <Route path="/timer" element={<Timer />}></Route>
          </Routes>
        </div>
        {todoState.isModal && <Editor />}
      </div>
    </div>
  );
}

export default App;

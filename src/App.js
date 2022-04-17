import "./App.css";
import { Sidebar, Todos, Timer } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
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
        {/* <Editor /> */}
      </div>
    </div>
  );
}

export default App;

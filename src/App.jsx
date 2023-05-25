import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import NewTask from "./components/new-task";
import TaskList from "./components/task-list";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isClassToggled, setClassToggled] = useState(false);

  function updateTasks(value) {
    setTasks([...tasks, value]);
  }

  function updateClassToggle() {
    setClassToggled(!isClassToggled);
  }

  return (
    <>
      <Header />
      <div className="container">
        <TaskList taskList={tasks} />
        <NewTask
          newTasks={updateTasks}
          isClassToggled={isClassToggled}
          updateClassToggle={updateClassToggle}
        />
        <button id="add" type="button" onClick={updateClassToggle}>
          +
        </button>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import NewTask from "./components/new-task";
import TaskList from "./components/task-list";

function App() {
  const [tasks, setTasks] = useState([]);

  function updateTasks(value) {
    setTasks([...tasks, value]);
  }
  // console.log(tasks);
  return (
    <>
      <Header />

      <div className="container">
        <TaskList taskList={tasks} />
        <NewTask newTasks={updateTasks} />
        <button id="add" type="button">
          +
        </button>
      </div>
    </>
  );
}

export default App;

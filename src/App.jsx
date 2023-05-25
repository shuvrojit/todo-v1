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
  console.log(tasks);
  return (
    <>
      <Header />
      <TaskList taskList={tasks} />
      <NewTask newTasks={updateTasks} />
    </>
  );
}

export default App;

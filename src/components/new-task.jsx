import { nanoid } from "nanoid";

const NewTask = ({ newTasks, isClassToggled, updateClassToggle }) => {
  const AddTask = (event) => {
    event.preventDefault();
    const task = {
      id: nanoid(),
      title: event.target[0].value,
      body: event.target[0].value,
    };
    newTasks(task);
    updateClassToggle();
  };

  return (
    <div
      id="new-task"
      className={isClassToggled ? "new-task-toggle" : "new-task"}
    >
      <h2>New Task</h2>
      <form onSubmit={AddTask}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />

        <label htmlFor="note">Note</label>
        <textarea type="text" name="note" id="note" />
        <div className="buttons">
          <button type="button" onClick={updateClassToggle}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewTask;

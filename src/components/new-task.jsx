const NewTask = ({ newTasks }) => {
  const AddTask = (event) => {
    event.preventDefault();
    const task = {
      title: event.target[0].value,
      body: event.target[0].value,
    };
    newTasks(task);
  };

  return (
    <div className="new-task">
      <h2>New Task</h2>
      <form onSubmit={AddTask}>
        <input />
        <textarea />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewTask;

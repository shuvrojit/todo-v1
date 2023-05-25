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
        <label for="name">Name</label>
        <input type="text" name="name" id="name" required />

        <label for="note">Note</label>
        <textarea type="text" name="note" id="note" />
        <div className="buttons">
          <button type="button">Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewTask;

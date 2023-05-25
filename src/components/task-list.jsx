const TaskList = ({ taskList }) => {
  return (
    <div className="task-list">
      <h2>Task lists</h2>

      {taskList == 0 ? (
        <h3>No tasks</h3>
      ) : (
        taskList.map((task) => {
          return (
            <div className="task">
              <h3>{task.title}</h3>
              <p>{task.body}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default TaskList;

const TaskList = ({ taskList }) => {
  return (
    <div className="task-list">
      <h2>Task lists</h2>

      {taskList.length == 0 ? (
        <h3>No tasks</h3>
      ) : (
        taskList.map((task) => {
          return (
            <div className="task" key={task.id}>
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

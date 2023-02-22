import TaskItem from "./TaskItem.jsx";

const TaskList = () => {
  const tasks = [
    { id: 1, title: 'todo1', completed: false },
    { id: 1, title: 'todo2', completed: false },
  ];

  return (
    <ul className="list-group">
      {todos.map((task) => (
        <TaskItem id={task.id} title={task.title} completed={task.completed} />
      ))}
    </ul>
  );
};

export default TaskList;
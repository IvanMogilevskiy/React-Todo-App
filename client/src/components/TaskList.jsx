import TaskItem from "./TaskItem.jsx";
import { useSelector } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <TaskItem id={task.id} title={task.title} completed={task.completed} />
      ))}
    </ul>
  );
};

export default TaskList;
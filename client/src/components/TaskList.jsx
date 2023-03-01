/* eslint-disable functional/no-expression-statements */
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import TaskItem from "./TaskItem.jsx";
import { fetchTasks } from "../redux/taskSlice.js";

const TaskList = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <ListGroup>
      {tasks.map((task) => (
        <TaskItem 
          key={task.id}
          id={task.id} 
          title={task.title} 
          completed={task.completed} 
    />
      ))}
    </ListGroup>
  );
};

export default TaskList;
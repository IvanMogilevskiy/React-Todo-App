/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable functional/no-expression-statements */
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TaskItem from "./TaskItem.jsx";
import { fetchTasks } from "../redux/taskSlice.js";

const TaskList = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <TransitionGroup component="ul" className="list-group">
        {tasks.map((task) => (
          <CSSTransition 
            key={task.id}
            classNames='task'
            timeout={800}
          >
            <TaskItem 
            key={task.id}
            id={task.id} 
            title={task.title} 
            completed={task.completed} 
            />
          </CSSTransition>
        ))}
    </TransitionGroup>
  );
};

export default TaskList;
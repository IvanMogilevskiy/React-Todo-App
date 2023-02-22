import { useDispatch } from 'react-redux';
import { completeTask } from '../redux/taskSlice.js';

const TaskItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteTask = () => {
    dispatch(completeTask({ id, completed: !completed}));
  };

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input 
            type="checkbox" 
            className="mr-3" 
            checked={completed}
            onChange={handleCompleteTask}
          />
          {title}
        </span>
        <button className="btn btn-danger">Delete</button>
      </div>
    </li>
  );
};
export default TaskItem;

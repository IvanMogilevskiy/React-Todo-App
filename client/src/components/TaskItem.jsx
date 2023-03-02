/* eslint-disable functional/no-expression-statements */
import { useDispatch } from 'react-redux';
import { ListGroupItem, Button } from 'react-bootstrap';
import { completeTaskAsync, deleteTaskAsync } from '../redux/taskSlice.js';

const TaskItem = ({ id, title, date, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteTask = () => {
    dispatch(completeTaskAsync({ id, completed: !completed}));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTaskAsync({ id }));
  };

  return (
    <ListGroupItem className={`${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input 
            type="checkbox" 
            className="me-3" 
            checked={completed}
            onChange={handleCompleteTask}
          />
          <div>
            <strong>{title}</strong>
            <small>{date}</small>
          </div>
        </span>
        <Button 
          variant="outline-danger"
          onClick={handleDeleteTask}
          size="sm"
        >
          &times;
        </Button>
      </div>
    </ListGroupItem>
  );
};
export default TaskItem;

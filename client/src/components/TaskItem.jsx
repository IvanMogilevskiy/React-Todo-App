const TaskItem = ({ id, title, completed }) => (
  <li className={`list-group-item ${completed && "list-group-item-success"}`}>
    <div className="d-flex justify-content-between">
      <span className="d-flex align-items-center">
        <input type="checkbox" className="mr-3" checked={completed} />
        {title}
      </span>
      <button className="btn btn-danger">Delete</button>
    </div>
  </li>
);

export default TaskItem;
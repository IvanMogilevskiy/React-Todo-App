/* eslint-disable functional/no-expression-statements */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../redux/taskSlice.js';


const AddTaskForm = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTask({
        title: value,
      })
    )
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-2">
      <label className="sr-only">Name</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
       />
      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
};

export default AddTaskForm;



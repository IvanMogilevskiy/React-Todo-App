import { useState } from "react";

const AddTaskForm = () => {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(value);
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


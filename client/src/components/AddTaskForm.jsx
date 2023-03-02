/* eslint-disable functional/no-conditional-statements */
/* eslint-disable functional/no-expression-statements */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, FloatingLabel, Button  } from 'react-bootstrap';
import { addTaskAsync } from '../redux/taskSlice.js';


const AddTaskForm = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    if (value.trim()) {
      dispatch(addTaskAsync({
          title: value,
          date: new Date().toLocaleDateString('en-US', dateOptions),
        }) 
      )
      setValue('');
    }
  };

  return (
    <Form onSubmit={onSubmit} className="form-inline mt-3 mb-2">
      <FloatingLabel controlId="taskName" className="sr-only" label="Name">
        <Form.Control
          name="taskName"
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Add Task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </FloatingLabel>
      <Button 
      type="submit"
      className="mb-2" 
      variant="outline-primary">
        Submit
      </Button>
    </Form>
  );
};

export default AddTaskForm;



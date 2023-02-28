import './index.css';
import { Container } from 'react-bootstrap';
import AddTaskForm from './components/AddTaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import CompletedTasks from './components/CompletedTasks.jsx';

const App = () => (
    <Container className="bg-white p-4 mt-5">
      <h1>Things I need to do</h1>
      <AddTaskForm />
      <TaskList />
      <CompletedTasks />
    </Container>
  );

export default App;

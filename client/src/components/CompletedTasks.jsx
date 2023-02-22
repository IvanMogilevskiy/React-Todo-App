import { useSelector } from "react-redux";

const CompletedTasks = () => {
  const completedTasks = useSelector((state) => 
    state.tasks.filter((task) => task.completed === true));

  return (
    <h4 className="mt-3">Total tasks completed: {completedTasks.length}</h4>
  )
};

export default CompletedTasks;
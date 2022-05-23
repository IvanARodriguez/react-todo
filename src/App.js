import './App.css';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function App() {

  return (
    <div className="App">
      <div className="task_list_view">
        <h1>MY TASKS</h1>
        <TaskForm />
        <Task text="Take out the dog" />
      </div>
    </div>
  );
}

export default App;

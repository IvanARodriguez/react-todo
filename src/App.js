import './App.css';
import TaskList from './components/TaskList';

function App() {

  return (
    <div className="App">
      <div className="task_list_view">
        <h1>MY TASKS</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;

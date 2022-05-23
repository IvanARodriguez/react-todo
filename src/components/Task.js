import '../stylesheets/Task.css';
import { FaTrashAlt } from 'react-icons/fa';

const Task = ({  id, text, done, markAsDone, deleteTask })=>{

    return(
        <div className={done ? "task_container done" : "task_container"}>
            <div className="task_text" onClick={()=> markAsDone(id)}>
                {text}
            </div>
            <div className="task_icon" onClick={()=> deleteTask(id)}>
               <FaTrashAlt />
            </div>
        </div>
    )
}

export default Task;
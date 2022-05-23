import '../stylesheets/Task.css';
import { FaTrashAlt } from 'react-icons/fa';

const Task = ({  text, done })=>{
    return(
        <div className={done ? "task_container done" : "task_container"}>
            <div className="task_text">
                {text}
            </div>
            <div className="task_icon">
               <FaTrashAlt />
            </div>
        </div>
    )
}

export default Task;
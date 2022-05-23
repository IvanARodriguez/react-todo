import { FaPlusCircle } from 'react-icons/fa';
import '../stylesheets/TaskForm.css'

const TaskForm = ()=>{
    return (
        <form className="task_form">
            <input 
                type="text"
                className="task_input"
                placeholder="What needs to be done?"
                name="text"
            />
            <button className="form_button"><FaPlusCircle /></button>
        </form>
    )
}

export default TaskForm;
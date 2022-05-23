import { FaPlusCircle } from 'react-icons/fa';
import '../stylesheets/TaskForm.css'
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = (props)=>{

    const [input, setInput] = useState();

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSend = e =>{
        e.preventDefault();
        const newTask = {
            id: uuidv4(),
            text: input,
            done: false
        }
        if(input === undefined) return alert("Input can't be empty")
        
        props.onSubmit(newTask);

    }

    return (
        <form className="task_form" onSubmit={handleSend}>
            <input 
                type="text"
                className="task_input"
                placeholder="What needs to be done?"
                name="text"
                onChange={handleChange}
            />
            <button className="form_button"><FaPlusCircle /></button>
        </form>
    )
}

export default TaskForm;
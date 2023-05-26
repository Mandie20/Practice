import React, {useState} from 'react';
import CreateTask from '../modals/createTask'

const Todo = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(modal);
    }

    return (
        <>
            <div className="header text-center">
                <h3>Sam_s Todo</h3>
                <button className="btn btn-primary mt-2" onClick={ () => setModal(true)}>Create Task</button>
            </div>
            <div className = "Task-container">

            </div>
            <CreateTask toggle = {toggle} modal = {modal}/>
        </>
    );
};

export default Todo;
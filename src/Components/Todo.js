import React, {useState} from 'react';
import CreateTask from '../modals/createTask'

const Todo = () => {
    const [modal, setModal] = useState(false);
    // to get information task
    const [taskList, setTaskList] = useState([]);

    const toggle = () => {
        setModal(modal);
    }

    // fonction to get task information
    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        setTaskList(taskList)
        setModal(false)
    }

    return (
        <>
            <div className="header text-center">
                <h3>Sam_s Todo</h3>
                <button className="btn btn-primary mt-2" onClick={ () => setModal(true)}>Create Task</button>
            </div>
            <div className = "task-container">
                {taskList.map((obj) => <li>{obj.Name}</li>)}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask} />
        </>
    );
};

export default Todo;
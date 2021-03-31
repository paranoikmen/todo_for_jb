import React from 'react';
import Task from "./Task";

export default function TasksList({tasks, toggleTask}) {
    return(
        <div >
            {
                tasks.map(task =>(
                    <Task task={task} toggleTask={toggleTask} key={task.id} />
                    ))
            }
        </div>
    )
}


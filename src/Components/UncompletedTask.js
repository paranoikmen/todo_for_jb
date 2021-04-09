import React from "react";
import "./style.css"
import Task from "./Task";

function UncompletedTask({inputTask}) {
    return <ul>
        { inputTask.map
            ((task, index) =>
                <li key={index} style={task.checked ? {display: 'none'} : null} className={"task_paper"}>
                    <Task task={task} index={index}/>
                </li>
            )}
    </ul>

}

export default UncompletedTask;

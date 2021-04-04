import React from "react";
import Task from "./Task";

function TaskList({inputTasks, toggleTask}) {
    return(
        <div>
            <ul>{inputTasks.map((task, index) =>
                (<Task index={index} toggleTask={toggleTask} task={task}/>))}</ul>
        </div>
    )
}

export default TaskList;

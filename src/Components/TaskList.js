import React from "react";
import Task from "./Task";
import "./style.css"
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";

function TaskList({inputTasks, toggleTask, deleteTask}) {
    return <ul>
        {inputTasks.map((task, index) =>
            (<li key={index}>
                <div
                    className={"task_paper"}
                    style={task.checked ? {textDecoration: "line-through", opacity: "60%"} : null}
                    onClick={() => { toggleTask(index) }}
                >
                    <Task index={index} task={task} toggleTask={toggleTask} />
                </div>
                <IconButton style={{marginLeft: "10px", marginTop: "20px"}} color="primary" component="span" onClick={() => deleteTask(index)}>
                    <DeleteForeverIcon/>
                </IconButton>
            </li>))}
    </ul>
}

export default TaskList;

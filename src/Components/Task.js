import React from "react";
import "./Task.css"
import {Paper} from "@material-ui/core";
import "./style.css"

function Task({index, task}) {
    return <Paper key={index} className={"task_paper"}>
            <div className={"task"}>
                {task.name}
            </div>
            <div style={{marginLeft: "10px"}}>
                {task.date.day}.{task.date.month}.{task.date.year}
            </div>
    </Paper>

}

export default Task;

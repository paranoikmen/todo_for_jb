import React from "react";
import "./Task.css"
import {Grid, Paper} from "@material-ui/core";

function Task({index, toggleTask, task}) {
    const showToggleTask = () => {
        if (task.checked) {
            return <div>✓</div>
        }
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            textAlign: "center"
        }}>
            <Paper style={{marginRight: "10px", height: "40px", width: "40px"}}>{showToggleTask()}</Paper>
            <Paper
                key={index}
                onClick={() => {
                    toggleTask(index)
                }}
                style={{height: "40px", width: "200px"}}
            >{task.name}</Paper>
            <Paper style={{marginLeft: "10px", height: "40px"}}>{task.date.day}/{task.date.month}/{task.date.year}</Paper>
        </div>
    )
}

export default Task;

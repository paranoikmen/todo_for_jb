import React from "react";
import "./Task.css"
import {Grid, Paper} from "@material-ui/core";

function Task({index, toggleTask, task}) {
    const showToggleTask = () => {
        if (!task.checked) {
            return <div> Х</div>
        } else {
            return <div> ✓</div>
        }
    }

    return (
        <div>
            <Grid
                container
                justify="center"
                alignItems="center"
                style={{padding: "10px"}}
                spacing={3}
            >
                <Paper
                    key={index}
                    onClick={() => {
                        toggleTask(index)
                    }}
                >{task.name}</Paper>
                <Paper>{showToggleTask()}</Paper>
                <Paper>{task.date.day}/{task.date.month}/{task.date.year}</Paper>
            </Grid>
        </div>
    )
}

export default Task;

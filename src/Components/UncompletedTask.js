import React from "react";
import {Grid, Paper} from "@material-ui/core";

function UncompletedTask({inputTask}) {
    return(
        <div>
            Невыполненные задачи:
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <ul>{inputTask.map((value, index) =>
                    <Paper key={index} style={value.checked ? {display: 'none'} : null}>{value.name}</Paper>)}
                </ul>
            </Grid>
        </div>
    )
}

export default UncompletedTask;

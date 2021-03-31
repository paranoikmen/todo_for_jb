import React from 'react'

export default function Task({task, toggleTask}) {
    return(
        <li style={task.checked ? {textDecoration: 'line-through'} : null }
            onClick={() => toggleTask(task)}
        >
            {task.name}
        </li>
    )
}

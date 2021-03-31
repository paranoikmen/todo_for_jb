import React, {useEffect, useState} from "react";
import InputTask from "./InputTask";
import TasksList from "./TaskList";


const Home = () => {
    const [value, setValue] = useState()

    const stack =[]

    function addTask(input) {

    }

    const handleChange = (event) => {
        const input = event.target;
        const value1 = input.value;

        setValue( event.target.value)
    }

    let list = [];

    const viee = () => {
        for(let i = 0; i < localStorage.length; i++) {
            list.push({name: localStorage.key(i), checked: localStorage.getItem(localStorage.key(i))})
        }
        console.log(list)
    }

    const handleFormSubmit = () => {
        const name = value
        const checked = false;
        localStorage.setItem(name, checked);
    };

    return(
        <div>
            <input name="task" value={value} onChange={handleChange} placeholder='Введите текст'/>
            <button onClick={handleFormSubmit}>Добавить</button>
            <button onClick={viee}>adad</button>
            <div>{list}</div>
        </div>
    )
}

export default Home;
import React, {useState} from "react";
import CompletedTask from './CompletedTask'
import TaskList from "./TaskList";
import UncompletedTask from "./UncompletedTask";
import DatePicker from "react-datepicker";
import Statistic from "./Statistic";
import {Button, ButtonGroup, Paper, TextField} from "@material-ui/core";

const Home = ({valueLocalStorage, setValueLocalStorage}) => {
    const [valueInput, setValueInput] = useState()
    const [selectedFile, setSelectedFile] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const [showTasks, setShow] = useState();
    const [showCompletedTasks, setShowCompleted] = useState();
    const [showUncompletedTasks, setShowUncompleted] = useState();

    const handleFormSubmit = () => {
        const name = valueInput
        const checked = false;

        if (name == "") {
            alert("Вы забыли ввести задачу!")
        } else {
            setValueLocalStorage([
                ...valueLocalStorage, {
                    name: name,
                    checked: checked,
                    date: {
                        dayOfWeek: startDate.getDay(),
                        day: startDate.getDate(),
                        month: (startDate.getMonth() + 1),
                        year: startDate.getFullYear()
                    }
                }])

            setValueInput("")
        }
    };

    const toggleTask = (index) => {
        const tmp = [...valueLocalStorage]
        tmp[index].checked = !valueLocalStorage[index].checked
        setValueLocalStorage(tmp)
    }

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        let reader = new FileReader();

        if (selectedFile != 0) {
            reader.readAsText(event.target.files[0])

            reader.onload = function () {
                reloadTasks(reader.result)
            };

            reader.onerror = function () {
                console.log(reader.error);
            };
        }

    };

    async function reloadTasks(tasks) {
        if (tasks.length == 0) {
            alert("файл не выбран или пустой")
        } else {
            localStorage.clear()
            let tmp = JSON.parse(tasks)
            setValueLocalStorage(tmp)
        }

    }

    return (
        <div style={{textAlign: "center"}}>
            <Paper elevation={7} style={{display: "flex", justifyContent: "center", margin: "10px", padding: "7px"}}>
                <TextField
                    id="inputTask"
                    label="Введите задачу..."
                    variant="outlined"
                    name="inputTask"
                    value={valueInput}
                    onChange={event => {setValueInput(event.target.value)}}
                />
                <div>
                    <DatePicker selected={startDate} dateFormat="dd/MM/yyyy" onChange={date => setStartDate(date)}/>
                    <Button variant="contained" color="primary" onClick={handleFormSubmit}>Добавить задачу</Button>

                </div>
                <div>
                    <input
                        id="contained-button-file"
                        multiple
                        type="file"
                        style={{display: "none"}}
                        onChange={changeHandler}
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">Загрузить задачи</Button>
                    </label>
                </div>
            </Paper>
            <Paper elevation={7} style={{justifyContent: "center", margin: "10px", padding: "7px"}}>
                <ButtonGroup aria-label="outlined button group">
                    <Button
                        color={showUncompletedTasks == "none" ? "secondary" : "primary"}
                        onClick={event => {
                            setShowUncompleted(showUncompletedTasks == null ? "none" : null)
                        }}
                    >Незавершенные</Button>
                    <Button
                        color={showCompletedTasks == "none" ? "secondary" : "primary"}
                        onClick={event => {
                            setShowCompleted(showCompletedTasks == null ? "none" : null)
                        }}
                    >Завершенные</Button>
                    <Button
                        color={showTasks == "none" ? "secondary" : "primary"}
                        onClick={event => {
                            setShow(showTasks == null ? "none" : null)
                        }}
                    >Все</Button>
                </ButtonGroup>
                <div style={{display: showTasks}}>
                    Все задачи:
                    <TaskList inputTasks={valueLocalStorage} toggleTask={toggleTask}/>
                </div>
                <div style={{display: showCompletedTasks}}>
                    <CompletedTask inputTask={valueLocalStorage}/>
                </div>
                <div style={{display: showUncompletedTasks}}>
                    <UncompletedTask inputTask={valueLocalStorage}/>
                </div>
            </Paper>
            <Statistic inputData={valueLocalStorage}></Statistic>
        </div>
    )
}

export default Home;
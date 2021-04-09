import React, {useState} from "react";
import CompletedTask from './CompletedTask'
import TaskList from "./TaskList";
import UncompletedTask from "./UncompletedTask";
import {Button, ButtonGroup, Paper, TextField} from "@material-ui/core";
import "./style.css"
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import IconButton from '@material-ui/core/IconButton';

const Home = ({valueLocalStorage, setValueLocalStorage}) => {
    const [valueInput, setValueInput] = useState()
    const [selectedFile, setSelectedFile] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const [showTasks, setShowAllTasks] = useState();
    const [showCompletedTasks, setShowCompleted] = useState("none");
    const [showUncompletedTasks, setShowUncompleted] = useState("none");

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

    const deleteTask = (index) => {
        const tmp = [...valueLocalStorage]
        tmp.splice(index, 1)
        setValueLocalStorage(tmp)
    }

    return (
        <div className={"main"}>
            <Paper elevation={3} className={"paper head_paper"}>
                <TextField
                    id="inputTask"
                    label="Введите задачу..."
                    variant="outlined"
                    name="inputTask"
                    style={{width: "100%"}}
                    value={valueInput}
                    onChange={event => {setValueInput(event.target.value)}}
                />
                <Button variant="contained" color="primary" onClick={handleFormSubmit} style={{marginLeft: "10px", width: "250px"}}>
                    Добавить задачу
                </Button>
                <input
                    id="contained-button-file"
                    multiple
                    type="file"
                    style={{display: "none"}}
                    onChange={changeHandler}
                />
                <label htmlFor="contained-button-file" style={{margin: "0"}}>
                    <IconButton style={{marginLeft: "10px"}} color="primary" component="span"><CloudUploadIcon/></IconButton>
                </label>
            </Paper>
            <Paper elevation={3} className={"paper tasks_paper"}>
                <ButtonGroup aria-label="outlined button group">
                    <Button
                        color={showTasks == "none" ? "secondary" : "primary"}
                        onClick={() => {
                            setShowCompleted("none")
                            setShowUncompleted("none")
                            setShowAllTasks(null)
                        }}
                    >
                        Все
                    </Button>
                    <Button
                        color={showCompletedTasks == "none" ? "secondary" : "primary"}
                        onClick={() => {
                            setShowAllTasks("none")
                            setShowUncompleted("none")
                            setShowCompleted(null)
                        }}
                    >
                        Выполненные
                    </Button>
                    <Button
                        color={showUncompletedTasks == "none" ? "secondary" : "primary"}
                        onClick={() => {
                            setShowAllTasks("none")
                            setShowCompleted("none")
                            setShowUncompleted(null)
                        }}
                    >
                        Невыполненные
                    </Button>
                </ButtonGroup>
                <div style={{display: showTasks, marginTop: "10px", width: "100%"}}>
                    <p>Все задачи:</p>
                    <TaskList inputTasks={valueLocalStorage} toggleTask={toggleTask} deleteTask={deleteTask}/>
                </div>
                <div style={{display: showCompletedTasks, marginTop: "10px", width: "100%"}}>
                    <p>Выполненные задачи:</p>
                    <CompletedTask inputTask={valueLocalStorage}/>
                    <Button variant="contained" color="primary" href={"/completedtask"} style={{marginLeft: "10px", width: "250px"}}>Перейти к статистике</Button>
                </div>
                <div style={{display: showUncompletedTasks, marginTop: "10px", width: "100%"}}>
                    <p>Невыполненные задачи:</p>
                    <UncompletedTask inputTask={valueLocalStorage}/>
                    <Button variant="contained" color="primary" href={"/uncompletedtask"} style={{marginLeft: "10px", width: "250px"}}>Перейти к статистике</Button>
                </div>
            </Paper>
        </div>
    )
}

export default Home;
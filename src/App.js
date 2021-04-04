import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Components/Home";
import CompletedTask from "./Components/CompletedTask";
import {useLocalStorage} from "react-use";
import UncompletedTask from "./Components/UncompletedTask";
import Statistic from "./Components/Statistic";

function App() {
    const [valueLocalStorage, setValueLocalStorage] = useLocalStorage('tasks', []);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'><Home valueLocalStorage={valueLocalStorage} setValueLocalStorage={setValueLocalStorage}/></Route>
                <Route path='/home'><Home valueLocalStorage={valueLocalStorage} setValueLocalStorage={setValueLocalStorage}/></Route>
                <Route path='/completedtask'>
                    <CompletedTask inputTask={valueLocalStorage}/>
                    <Statistic inputData={valueLocalStorage} showTask={"completed"}/>
                </Route>
                <Route path='/uncompletedtask'>
                    <UncompletedTask inputTask={valueLocalStorage}/>
                    <Statistic inputData={valueLocalStorage} showTask={"uncompleted"}/>
                </Route>\
            </Switch>
        </BrowserRouter>
    );
}

export default App;

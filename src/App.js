import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Components/Home";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/home' component={Home}/>
                <Route path='/completedtask' component={Home}/>
                <Route path='/uncomletedtask' component={Home}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

import {Switch, Route} from "react-router-dom";
import Login from "../Components/Login";
import Signup from "../Components/SignUp";
import Home from "../Components/Home";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route path="/signup">
                <Signup/>
            </Route>
            <Route path="/home">
                <Home/>
            </Route>
        </Switch>
    )
}

export default Routes
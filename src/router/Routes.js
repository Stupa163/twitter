import React from 'react';
import {createBrowserHistory} from 'history'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../views/Home";
import Tweet from "../views/Tweet";
import Login from "../views/Login";
import Profile from "../views/Profile";
import PrivateRoute from "./PrivateRoute";

const Routes = (props) => {
    const history = createBrowserHistory();

    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <PrivateRoute exact path="/tweet" component={Tweet}/>
                <PrivateRoute exact path="/profile" component={Profile}/>
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;

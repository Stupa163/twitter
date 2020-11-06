import React from 'react';
import {createBrowserHistory} from 'history'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../views/Home";
import Tweet from "../views/Tweet";
import Login from "../views/Login";
import Profile from "../views/Profile";

const Routes = (props) => {
    const history = createBrowserHistory();

    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/tweet" component={Tweet}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/profile" component={Profile}/>
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;

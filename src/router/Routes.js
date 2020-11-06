import React from 'react';
import {createBrowserHistory} from 'history'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../views/Home";

const Routes = (props) => {
    const history = createBrowserHistory();

    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;

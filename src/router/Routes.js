import React from 'react';
import {createBrowserHistory} from 'history'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../views/Home";
import Tweet from "../views/Tweet";

const Routes = (props) => {
    const history = createBrowserHistory();

    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/tweet" component={Tweet}/>
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;

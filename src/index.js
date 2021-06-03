import React from 'react';
import ReactDOM from 'react-dom';
import './globalStyle.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import App from './App';
import Home from "./components/Home";
import Navigation from "./components/Navigation";

ReactDOM.render(
    <React.StrictMode>
            <Navigation />
            <Router>
                <Switch>
                    <Route path="/chat">
                        <App/>
                    </Route>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

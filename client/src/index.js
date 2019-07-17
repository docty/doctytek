import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import './assets/css/styles.css';

import './assets/bootstrap/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import TutorialHomepage from "./Component/TutorialHomepage";
import TutorialRoute from './Component/TutorialRoute';

const routing = (
    <Router>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/tutorial/:url' component={TutorialHomepage}/>
            <Route exact path='/:subroute/:url' component={TutorialRoute}/>

        </Switch>
    </Router>
);


ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();

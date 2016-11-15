import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './config/routes';

ReactDOM.render(
    <Router routes={routes} history={browserHistory}/>,
    document.getElementById("main")
);
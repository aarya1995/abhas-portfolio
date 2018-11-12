import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home';
//import Nextdoor from './components/nextdoor';
import Meeshquest from './components/meeshquest';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/nextdoor" component={Nextdoor} /> */}
            <Route exact path="/meeshquest" component={Meeshquest} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

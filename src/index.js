import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home';
import Nextdoor from './components/nextdoor';
import Meeshquest from './components/meeshquest';
import Datascience from './components/datascience';
import Vuepeer from './components/vuepeer';
import PEDS from './components/peds';
import Flutter from './components/flutter';
import Aqua from './components/aqua';
import WeCook from './components/wecook';
import Telenix from './components/telenix';
import KwikNews from './components/kwiknews';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/nextdoor" component={Nextdoor} />
            <Route exact path="/meeshquest" component={Meeshquest} />
            <Route exact path="/datascience" component={Datascience} />
            <Route exact path="/vuepeer" component={Vuepeer} />
            <Route exact path="/peds" component={PEDS} />
            <Route exact path="/flutter" component={Flutter} />
            <Route exact path="/aqua" component={Aqua} />
            <Route exact path="/wecook" component={WeCook} />
            <Route exact path="/telenix" component={Telenix} />
            <Route exact path="/kwiknews" component={KwikNews} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

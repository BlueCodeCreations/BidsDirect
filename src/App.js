/* eslint-disable react/react-in-jsx-scope */
const path = require('path');
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ForConsumers from './components/ForConsumers';

const App = () => (
<Router>
    <Switch>
        <Route exact path='/' >
            <LoginPage />
        </Route>
        <Route exact path='/ForConsumers' >
            <ForConsumers />
        </Route>
    </Switch>
</Router>
);

export default App;

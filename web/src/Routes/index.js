import React from 'react';
import { Switch, Route } from "react-router-dom";

import PrivateRoute from '../Routes/PrivateRoute';

import Home from '../Pages/Home';
import SignIn from '../Pages/SignIn';
import Dashboard from '../Pages/Dashboard';
import User from '../Pages/User';


const Routes = () => (
        
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/user" component={User} />
    </Switch>
);

export default Routes;
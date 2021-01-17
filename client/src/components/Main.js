import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login.js';
import NewUser from "./NewUser";
import ExistingUser from "./ExistingUser";
import HowTo from "./HowTo";
import Invest from "./Invest";
import About from "./About";
import CreateFund1 from "./CreateFund1";
import CreateFund2 from "./CreateFund2";
import MyAccount from "./MyAccount";
import FundView from "./FundView";
// import Signup from '../pages/Signup';

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Login}></Route>
            <Route exact path='/newuser' component={NewUser}></Route>
            <Route exact path='/existinguser' component={ExistingUser}></Route>
            <Route exact path='/howto' component={HowTo}></Route>
            <Route exact path='/invest' component={Invest}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/createfund' component={CreateFund1}></Route>
            <Route exact path='/createfund2' component={CreateFund2}></Route>
            <Route exact path='/myaccount' component={MyAccount}></Route>
            <Route exact path='/fundview' component={FundView}></Route>
            {/*<Route exact path='/signup' component={Signup}></Route>*/}
        </Switch>
    );
}

export default Main;
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'

const Main = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
            </Switch>
        </>
    );
}
export default Main;
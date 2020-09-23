import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

const Main = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/signup' render={()=><SignUp/>}/>
                <Route path='/login' component={Login} />
                <Route render={()=><div>404 Not Found</div>}/>
            </Switch>
        </>
    );
}
export default Main;
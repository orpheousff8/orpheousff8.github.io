import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import SignupTest from './pages/SignupTest'

const Main = () => {
    const NoMatch = () => <div>404 Not Found</div>
    return (
        <>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
                <Route path='/signupTest' component={SignupTest} />
                <Route component={NoMatch}/>
                {/* the same but shorter */}
                {/* <Route render={()=><div>404 Not Found</div>}/> */}
            </Switch>
        </>
    );
}
export default Main;
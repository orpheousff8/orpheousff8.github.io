import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import CreatePikka from './pages/CreatePikka';
import Pikka from './pages/Pikka';

const Main = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/signup' render={()=><SignUp/>}/>
                <Route path='/login' component={Login} />
                <Route path='/create' component={CreatePikka} />
                <Route path='/pikka/:id' component={Pikka} />
                <Route render={()=><div>404 Not Found</div>}/>
                {/* Can also write using render like aboves */}
            </Switch>
        </>
    );
}
export default Main;
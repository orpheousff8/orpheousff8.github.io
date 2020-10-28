import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import CreatePikka from './pages/CreatePikka';
import EditPikka from './pages/EditPikka';
import Pikka from './pages/Pikka';

const Main = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact component={Home} />
                {/* the same as others */}
                <Route path='/signup' render={()=><SignUp/>}/>
                <Route path='/login' component={Login} />
                <Route path='/forgotPassword' component={ForgotPassword}/>
                <Route path='/create' component={CreatePikka} />
                <Route path='/edit/:id' component={EditPikka} />
                <Route path='/pikka/:id' component={Pikka} />
                {/* Can also write using render like aboves */}
                <Route render={()=><div>404 Not Found</div>}/>
            </Switch>
        </>
    );
}
export default Main;
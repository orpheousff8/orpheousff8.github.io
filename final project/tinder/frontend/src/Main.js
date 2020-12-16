import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import Preferences from './pages/Preferences';

const Main = (props) => {
    return (
        <>
            <Switch>
                <Route path="/" exact render={() => <Home />} />
                <Route path="/create" render={() => <CreateAccount/>}/>
                <Route path="/preferences" render={() => <Preferences />} />
                <Route render={() => <div>404 Not Found</div>} />
            </Switch>
        </>
    );
}
export default Main;
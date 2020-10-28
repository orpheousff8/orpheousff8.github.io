import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reducer from './redux/reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import MyNavbar from './MyNavbar'
import Main from './Main'
import ErrorToast from './ErrorToast';
import NotificationToast from './NotificationToast';
import logo from './logo.svg';
import './App.css';

function App() {
  const store = createStore(reducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <div className="App">
        <MyNavbar />

        <header className="App-header">
          <div className="w-25"></div>
          <img src={logo} className="App-logo mx-auto" alt="logo" />
          <div className="w-25" >
            <ErrorToast />
            <NotificationToast />
          </div>
        </header>

        <Main />
      </div>
    </Provider>
  );
}

export default App;

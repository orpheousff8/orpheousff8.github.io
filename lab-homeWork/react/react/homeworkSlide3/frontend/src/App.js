import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reducer from './redux/reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import MyNavbar from './MyNavbar'
import Main from './Main'
import logo from './logo.svg';
import './App.css';

function App() {
  const store = createStore(reducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <div className="App">
        <MyNavbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Main />
      </div>
    </Provider>
  );
}

export default App;

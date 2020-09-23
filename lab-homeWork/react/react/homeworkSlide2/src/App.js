import React from 'react';
import MyNavbar from './MyNavbar'
import Main from './Main'
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Main/>
    </div>
  );
}

export default App;

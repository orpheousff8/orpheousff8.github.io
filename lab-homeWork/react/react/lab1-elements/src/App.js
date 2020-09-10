import React from 'react';
import './App.css';

function Hello(props) {
  return (
    <span>{props.firstName}: {props.children}</span>
  )
}

const element = React.createElement(
                  'Hello',
                  {firstName: 'Jonathan'},
                  'Hello, World'
                );

function App() {
  return (
    <div>
      {element}
      <br/>
      <Hello firstName="Dio">Hello the World!</Hello>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

function App() {
  // const Hello = <Hello firstName: "Jonathan">Hello World</Hello>
  
  return (
    <div>
    React.createElement(
      'Hello',
      {firstName: 'Jonathan'},
      "Hello World"
    )

    </div>
  );
}

export default App;

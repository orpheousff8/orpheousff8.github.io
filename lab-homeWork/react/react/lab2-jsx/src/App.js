import React from 'react';
import './App.css';

const myComponent = {
  one: () => <div>1</div>,
  two: (props) => <div>{props.name}</div>,
  three: () => React.createElement(
    'Three',
    {number: 3},
    "This is 3"
  )
}

function App() {
  return (
    <div>
      <myComponent.one />
      <myComponent.two name="Saracha" />
      <myComponent.three />
    </div>
  );
}

export default App;

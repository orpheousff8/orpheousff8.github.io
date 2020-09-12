import React from 'react';
import './App.css';

function MyTag(props) {

  let name = props.name;
  let age = props.age;
  let isMan = props.isMan;
  let theNull = props.theNull;
  let theUndefined = props.theUndefined;
  let location = props.location;
  let education = props.education;

  return (
  <div>
    <strong>Test string:</strong> <p>{name}</p>
    <strong>Test number:</strong> <p>{age}</p>
    <strong>Test boolean:</strong> <p>{isMan}</p>
    <strong>Test boolean with a condition:</strong> <p>{isMan ? "True" : "False"}</p>
    <strong>Test null:</strong> <p>{theNull}</p>
    <strong>Test undefined:</strong> <p>{theUndefined}</p>
    <ul style={{paddingLeft:"0"}}><strong>Test string array:</strong>
      {
        location.map((place) => (
          <li style={{paddingLeft:"1rem"}}>string: {place}</li>
        ))
      }
    </ul>
    <ul style={{paddingLeft:"0"}}><strong>Test object:</strong>
      {
        Object.keys(education).map((level, index) => (
          <li style={{paddingLeft:"1rem"}}>key: {level}, value: {education[level]}</li>
        ))
      }
    </ul>
  </div>
  );
}

function App() {
  return (
    <MyTag name="Dio" age={6} isMan={true} theNull={null} theUndefined={undefined} 
    location={["abc", "def"]} education={{"Grade12":"School", "bachelor":"Uni"}}/>
  );
}

export default App;

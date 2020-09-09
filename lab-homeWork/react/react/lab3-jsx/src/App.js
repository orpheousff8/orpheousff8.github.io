import React from 'react';
import './App.css';

// const Saracha = {
//   name: (props) => <div>{this.name='Saracha'}</div>,
//   age: (pros) => <div>{this.age='6'}</div>,
//   isMan: (props) => <div>{this.isMan}</div>,
//   location: (prop) => <div>{this.location='[abc, def]'}</div>,
//   education: (prop) => <div>{this.education = {"school":"St.Louis", "bachalor":"KU"}}</div>
// }

function Saracha(props) {

  let name = props.name;
  let age = props.age;
  let isMan = props.isMan;
  let location = props.location;
  let education = props.education;

  return (
  <div>
    My name is: {name}<br/>
    My age is: {age}<br/>
    I am a {isMan ? "Man" : "Woman"}.<br/>
    <ul>My place(s):
      {
        location.map((place) => (
          <li>At: {place}</li>
        ))
      }
    </ul>
    <ul>My education:
      {
        Object.keys(education).map((level, index) => (
          <li>Level: {level}, Where: {education[level]}</li>
        ))
      }
    </ul>
  </div>
  );
}

function App() {
  return (
    <Saracha name="Saracha" age={6} isMan={true} location={["abc", "def"]} education={{"M6":"School", "bachelor":"Uni"}}/>
  );
}

export default App;

import React from 'react';
import './App.css';

let Employee = (props) => {
  return (
    <div>
      <div>First name: {props.firstName}</div>
      <div>Last name: {props.lastName}</div>
      <div>Age: {props.age}</div>
    </div>
  );
}

let Leader = (props) => {
  let firstName = props.xx;
  let lastName = props.aa;
  let age = props.bb;

  return <Employee firstName={firstName} lastName={lastName} age={age}></Employee>
}

let Head = (props) => {
  let p = {...props};

  return <Employee firstName={p.cc} lastName={p.dd} age={p.ee}></Employee>
}

let Intern = (props) => {
  const element = {firstName: props.firstName, lastName: props.lastName, age:props.age};

  return <Employee {...element}/>
}

function App() {
  return (
    <div className="App">
      <div>
        <ul>
          <li>สร้าง props เก็บค่าใน obj ให้มี 3 propreties</li>
          <li>property ใน obj ให้เก็บค่า เป็น string, number, obj</li>
          <li>ให้สร้าง component ที่มี 3 propreties 2 แบบ</li>
          <li>แบบแรกให้เขียน properties ปกติ</li>
          <li>แบบสองให้เขียน โดยใช้ spread operator</li>
          <li>ดึงค่า props แต่ละค่า มาแสดงผล</li>
        </ul>
      </div>
      <div>
        <div>
          <Employee firstName="Jotaro" lastName="Joestar" age={17}></Employee><br/>
          <Leader xx="Joseph" aa="Joestar" bb={60}></Leader><br/>
          <Head cc="Jonathan" dd="Joestar" ee={24} ></Head><br/>
          <Intern firstName="Josuke" lastName="Higashikata" age={16}></Intern>
        </div>
      </div>
    </div>
  );
}

export default App;

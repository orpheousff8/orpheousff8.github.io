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
      <ul><strong>Test string array:</strong>
        {
          location.map((place) => (
            <li>string: {place}</li>
          ))
        }
      </ul>
      <ul><strong>Test object:</strong>
        {
          Object.keys(education).map((level, index) => (
            <li>key: {level}, value: {education[level]}</li>
          ))
        }
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <div>
        <ol>
          <li>ให้สร้าง ตัวแปร 5 ตัวแปร (ชื่ออะไรก็ได้)มาเก็บค่า Datatype ชนิดต่าง string, number, boolean, null, undefined </li>
          <li>ให้สร้าง ตัวแปร 2 ตัวแปร (ชื่ออะไรก็ได้) มาเก็บค่า Data structure เช่น array และ Obj</li>
          <li>นำค่าตัวแปรแต่ละตัวมาใส่ใน {`<p> </p>`}</li>
          <li>แสดงผลออกมาบนหน้าเว็บ ของตัวแปรแต่ละตัว</li>
          <li>สังเกตการแสดงผลของตัวแปรแต่ละตัวว่าตัวไหน แสดงผลออกมาได้บ้าง</li>
        </ol>
      </div>
      <div className="App">
        <MyTag name="Dio" age={6} isMan={true} theNull={null} theUndefined={undefined}
          location={["abc", "def"]} education={{ "Grade12": "School", "bachelor": "Uni" }} />
      </div>
    </div>
  );
}

export default App;

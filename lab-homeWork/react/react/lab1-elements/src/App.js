import React from 'react';
import './App.css';

function Hello(props) {
  return (
    <span>{props.firstName}: {props.children}</span>
  )
}

const element = React.createElement(
  'Hello',
  { firstName: 'Jonathan' },
  'Hello, World'
);

function App() {
  return (
    <div>
      <div>
        <ol>
          <li>สร้าง element โดยใช้ React.createElement()</li>
          <li>สร้าง element โดยการเขียน แบบ HTML ปกติ</li>
          <li>ชื่อ element ให้ตั้งชื่อว่า Hello</li>
          <li>กำหนด properties (props )ใน element ว่า firstName และ มีค่าเป็น ชื่อของแต่ละคน</li>
          <li>และกำหนดค่า Chidren เป็น คำว่า Hello World</li>
        </ol>
      </div>
      <div>
        using React.createElement():<br />
        {element}
        <br /><br />
      using Tag Hello:<br />
        <Hello firstName="Dio">Hello the World!</Hello>
      </div>
    </div>
  );
}

export default App;

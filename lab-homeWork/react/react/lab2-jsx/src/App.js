import React from 'react';
import './App.css';

const myComponent = {
  one: () => <div>1</div>,
  two: (props) => <div>{props.name}</div>,
  three: () => React.createElement(
    'Three',
    { number: 3 },
    "This is 3"
  )
}

function App() {
  return (
    <div>
      <div>
        <ol>
          <li>สร้าง obj ชื่อ myComponent</li>
          <li>มี 3 key เป็น one , two, three</li>
          <li>value ของแต่ละ key ให้เขียนในรูปแบบ JSX</li>
          <li>one ให้ค่าเป็น function ที่ Return JSX ที่ไม่มี props</li>
          <li>two ให้ค่าเป็น function ที่ Return JSX ที่มี props ชื่อ name แล้วใช้ชื่อเราลงไป</li>
          <li>three ให้ค่าเป็น React.creteElement()</li>
          <li>จากนั้นให้นำ ทุกๆ component ใน obj มาแสดงผลโดยใช้ dot Notation</li>
        </ol>
      </div>
      <div>
        <myComponent.one />
        <myComponent.two name="Saracha" />
        <myComponent.three />
      </div>
    </div>
  );
}

export default App;

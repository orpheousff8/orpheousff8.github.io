import React from 'react';
import './App.css';

function App() {
  const array1 = [`a`, `b`, `c`, `d`, `e`];

  return (
    <div>
      <div>
        <ol>
          <li>ให้สร้าง ตัวแปร มาเก็บค่า array [“a”, “b”, “c”, “d”, “e”]</li>
          <li>นำ array มา map แล้ว แสดงผลเป็น list</li>
          <li>ใน {`<li> </li>`} ไม่ต้องใส่ key</li>
          <li>เปิด Console.log ใน browser สังเกตุ warning ที่เกิดขึ้น</li>
        </ol>
      </div>
      <div className="App">
        <ul>Map array1:
          {array1.map((item) => <li>{item}</li>)}
        </ul>
      </div>
      <div className="Answer">
        มี Warning<br />
        <span style={{ color: "red" }}>index.js:1 Warning: Each child in a list should have a unique "key" prop.</span>
      </div>
      <div>
        <ol>
          <li>ให้สร้าง ตัวแปร มาเก็บค่า array [“a”, “b”, “c”, “d”, “e”]</li>
          <li>นำ array มา map แล้ว แสดงผลเป็น list</li>
          <li>ใน {`<li> </li>`} ใส่ key เข้าไปใน tag li</li>
          <li>เปิด Console.log ใน browser สังเกตุ warning ที่เกิดขึ้น</li>
        </ol>
      </div>
      <div className="App">
        <ul>Map array1:
          {array1.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <div className="Answer">
        ไม่มี Warning<br />
      </div>
    </div>
  );
}

export default App;

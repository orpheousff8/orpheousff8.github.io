import React from 'react';
import './App.css';

function App() {
  const array1 = [`a`, `b`, `c`, `d`, `e`];
  const array2 = [<p> a </p>,  <p> b </p>,  <p> c </p>, <p> d </p>, <p> e </p>];    

  return (
    <div>
      <div>
        <ol>
          <li>ให้สร้าง ตัวแปร มาเก็บค่า array [“a”, “b”, “c”, “d”, “e”] </li>
          <li>ให้สร้าง ตัวแปร มาเก็บค่า array {'[ <p> a </p>,  <p> b </p>,  <p> c </p>, <p> d </p>, <p> e </p>]'} </li>
          <li>แสดงผล array ในข้อ 1 และ ข้อ 2</li>
          <li>ให้นำ array ตัวที่  1 มา map แล้ว แสดงผลให้ได้เหมือน array แบบที่ 2</li>
        </ol>
      </div>
      <div className="App">
        <div>array1: {array1}</div>
        <div>array2: {array2}</div>
        <div>Map array1:
          {array1.map((item) => <p>{item}</p>)}
        </div>
      </div>
    </div>
  );
}

export default App;

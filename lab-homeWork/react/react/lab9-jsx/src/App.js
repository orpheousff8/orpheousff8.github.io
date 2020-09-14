import React from 'react';

function App() {
  let a = 'text';
  let b = null;
  let c = undefined;

  const callIf = () => {
    if (c) {
      return c;
    } 
    else if (b) {
      return b;
    } 
    else {
      return a;
    }
  }
  return (
    <>
      <div>
          lab
          ให้แสดงผล JSX children โดยใช้ conditional {`&&`},  ||, if else, ternary{`(?)`}<br/>
          <span style={{ color: 'red' }}>***</span> กรณีที่มีข้อมูลหรือไม่มีข้อมูลเช่น มีการรับข้อมูลมาจาก user<br/>
          ถ้าตรวจแล้วพบข้อมูลให้เอาข้อมูล มาแสดง แต่ถ้าไม่มีให้แสดงผลอีกแบบ<br/>
          จำลองโดย กำหนดตัวแปร 3 ตัว<br/>
          ตัวแรกกำหนดค่าเป็น string หรือ number<br/>
          ตัวที่สอง เป็น null<br/>
          ตัวที่สอม เป็น undefined<br/>
          เอาทั้ง 3 ตัวแปร มาแสดงผลแบบ conditional { `&&` },  ||, if else, ternary{ `(?)` }<br/>
          ถ้ามีค่าให้แสดงผลเป็นตัวแปรนั้นออกมา<br/>
      </div>
      <hr/>
      <div>
        {`let a = 'text'; let b = null; let c = undefined;`}<br/>
        {`a && b && c`}
        <p>{a && b && c}</p>
        {`a || b || c`}
        <p>{a || b || c}</p>
        {`if c {c} else if b {b} else {a}`}
        <p>
          {callIf()}
        </p>
        {`c ? c : b ? b : a`}
        <p>{c ? c : b ? b : a}</p>
      </div>
    </>
  );
}

export default App;

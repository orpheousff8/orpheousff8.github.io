import React from 'react';

function App() {
  const colourSet = ['red', 'blue', 'green', 'purple', 'pink'];
  return (
    <>
      <div>
        <ul>
          <li>ใช้ Create React App ในการสร้าง Project ขึ้นมาแล้วลบ template เดิมทิ้ง</li>
          <li>สร้าง Component ชื่อ RandomBox ให้ได้หน้าตาแบบนี้</li>
          <li>
            <ul>
              ให้ สีกล่อง และ ขนาดของ font ภายใน RandomBox จะต้องถูกสุ่มขึ้นมาจากข้อกำหนดดังนี้
              <li>สี: ['red', 'blue', 'green', 'purple', 'pink']</li>
              <li>ขนาด font : 20-40px</li>
              <li>ทุกครั้งที่ refresh page ใหม่ สีของกล่องและขนาด font จะต้องเปลี่ยนไปเรื่อยๆ</li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <div style={
          {
            display: "block",
            backgroundColor: colourSet[Math.floor(Math.random() * colourSet.length)],
            fontSize: String(Math.round(20 + Math.random() * 20) + `px`),
            color: 'white',
            width: 'fit-content',
            height: 'auto',
            padding: "3rem 1rem 3rem 1rem"
          }
        }>
          Random Box
      </div>
    </div>
    </>
  );
}

export default App;

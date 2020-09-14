import React from 'react';
import logo from './logo.svg';
import Capture from './Capture.PNG';
import './App.css';

const AppHeader = ({text}) => {
  const myInlineCss = {color: 'grey', fontSize: '12px'};
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{text}</p>
      <p style={myInlineCss}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br/>
        Aenean commodo ligula eget dolor. 
        Aenean massa. <br/>
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>
      <br/>
      <a className="App-link" href="#">
        Find out more
      </a>
    </header>
  );
}

function App() {
  return (
    <>
      <div>
        <ol>
          lab
          <li>ให้ลองเขียน CSS แบบ inline CSS</li>
          <li>ให้ลอง กำหนด ตัวแปรขึ้นมา เก็บข้อมูลที่เป็น obj และ มีการกำหนด key : value เหมือนกับการเขียน CSS
            <ol style={{ listStyleType: 'lower-roman' }}>
              <li>*** key จะต้องไม่มี - โดยปกติจะเขียนเป็น camel case เช่น</li>
              <li>CSS ปกติ font-size เปลี่ยนเป็น fontSize</li>
            </ol>
          </li>
          <li>ให้ลอง import CSS มาใช้ import “ไฟล์” โดย ใน ไฟล์ CSS นั้นสามารถเขียนได้แบบปกติการตกแต่ง CSS อาจจะมีการตกแต่ง layout ตกแต่ง สี ขนาดต่างของ element</li>
          <li>ให้ลอง import รูปภาพจากภายนอก มาใช้</li>
        </ol>
        <img src={Capture} alt="example" />
      </div>
      <hr />
      <div className="App">
        <header className="App-header" style={{ width: '200px' }}>
          <h1>Latest News</h1>
          <h6>Covering March {'&'} April 2015</h6>
        </header>
        <AppHeader text="What happened in Thailand?"/>
        <AppHeader text="The funkiest Medusas"/>
      </div>
    </>
  );
}

export default App;

import React from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

const Poster = (props) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.showDate}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function App() {
  return (
    <>
      <div>
        <ul>lab
        <li>ให้สร้าง tag JSX เป็น tag ul และ มี li อยู่ภายใน</li>
          <li>ul มี li 3 tag ที่เรียงเลข 1,2,3</li>
          <li>
            <ol>ให้แสดงผลทั้งหมด 3 แบบ
            <li>เขียน li ใน ul แบบปกติเหมือนใน HTML</li>
              <li>เขียน li ที่อยู่ใน array โดยที่ li คือ แต่ละ element ของ array</li>
              <li>ให้ [1,2,3].map() โดยเปลี่ยนค่าจาก 1,2,3 ให้เป็น tag {`<li>1</li>`}</li>
            </ol>
          </li>
          <li>สร้าง arr ให้ element แต่ละ element เป็น obj แต่ละ obj เก็บ รูปภาพหนัง ชื่อหนัง และ วันที่จะฉาย ทั้งหมด 3 เรื่อง</li>
          <li>เอาค่าของ แต่ละ element มา map แล้วเปลี่ยนเป็น li โดยแต่ละ li นำค่าที่อยู่ใน obj มาแสดงผลเป็น movie card</li>
        </ul>
        <img src={require('./Capture.PNG')} alt="example" />
      </div>
      <hr />
      <div>
        <div>
          list แบบปกติ
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div>
          list แบบ array
          <ul>{[<li key={1}>1</li>, <li key={2}>2</li>, <li key={3}>3</li>]}</ul>
        </div>
        <div>
          list แบบ [1,2,3].map()
          <ul>{[1, 2, 3].map((value) => <li key={value}>{value}</li>)}</ul>
        </div>
        <div>
          list ของ object ที่ทำเป็น movie card
          {
            [
              { imgUrl: require('./1.jpg'), title: "Phantom Blood", showDate: "5 October 2012" },
              { imgUrl: require('./2.jpg'), title: "Battle Tendency", showDate: "7 December 2012" },
              { imgUrl: require('./3.jpg'), title: "Stardust Crusaders", showDate: "4 April 2014" }
            ].map((value) => <li key={value.title}><Poster {...value}/></li>)
          }
        </div>
      </div>
    </>
  );
}

export default App;

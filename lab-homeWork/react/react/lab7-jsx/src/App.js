import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const Person = (props) => {

  return (
    <Container className="w-25 ml-0">
      <Row>
        <Col xs={4}>
          <Image src={props.imageUrl} alt="Profile Picture" width={120} height={120} roundedCircle/>
        </Col>
        <Col xs="auto">
          <h4 className="text-primary">{props.displayName}</h4>
          <h6 className="text-black-50">{props.workPlace}</h6>
        </Col>
      </Row>
    </Container>
  );
}

function App() {
  return (
    <div>
      <div>
        <ul>
          ให้เขียน Tag ของ JSX ที่ชื่อว่า Person
        <li>Person สามารถรับ displayName, workPlace, imgUrl เข้ามาได้</li>
          <li>โดยจะแสดงผลราวๆ นี้</li>
          <img src={require('./Capture.PNG')} alt="example"/>
        </ul>
      </div>
      <hr/>
      <Person imageUrl={require('./dio.jpg')} displayName="Dio Brando" workPlace="Laws company"/>
    </div>
  );
}

export default App;

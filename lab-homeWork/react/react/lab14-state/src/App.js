import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

const MyCard = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header>{props.title}</Card.Header>
      <Card.Img variant="top" src={props.picture} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.comment}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function App() {
  const stateArr = useState({
    title: "JoJo: Stardust Crusader",
    name: "Star Platinum",
    picture: require('./starPlatinum.PNG'),
    comment: "ORA ORA ORA ORA ORA ORA!"
  });
  return (
    <div className="d-flex align-items-center justify-content-center">
      <MyCard {...stateArr[0]}/>
    </div>
  );
}

export default App;

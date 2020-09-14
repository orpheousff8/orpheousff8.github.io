import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

const pictureCard = (props) => {

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>Date: {props.date}</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="#">{props.likeCount}</Card.Link>
                    <Card.Link href="#">{props.commentCount}</Card.Link>
                </Card.Body>
            </Card>
            {/* {console.log(props)} */}
        </>
    );
}

export default pictureCard;
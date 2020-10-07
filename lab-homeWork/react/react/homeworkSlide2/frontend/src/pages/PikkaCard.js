import React from 'react';
import Card from 'react-bootstrap/Card';
import image from '../image.svg';

const PikkaCard = (props) => {
    return (
        <>
            <Card className="mt-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                {/* <Card.Img variant="top" src={props.image} /> */}
                <Card.Body>
                    <Card.Title>Caption: {props.caption}</Card.Title>
                    <Card.Text>ID: {props.id}</Card.Text>
                    <Card.Text>Image src: {props.image}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}
export default PikkaCard;
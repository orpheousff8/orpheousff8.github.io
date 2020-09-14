import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PictureCard from './pictureCard';

const pictureCardDeck = (props) => {

    return (
        <>
            <Container fluid>
                <Row>
                    {Object.keys(props).map((key) => <Col xs={3}><PictureCard {...props[key]} /></Col>)}
                </Row>
            </Container>
        </>
    );
}

export default pictureCardDeck;
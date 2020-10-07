import React from 'react';
import Container from 'react-bootstrap/esm/Container';
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import PikkaCard from './PikkaCard';

const PikkaCardDeck = (props) => {

    return (
        <>
            <Container className="d-flex flex-wrap p-2 justify-content-around">
                {/* <Row>
                    {Object.keys(props).map((key) => <Col xs={4} key={props[key].id}><PikkaCard {...props[key]} /></Col>)}
                </Row> */}
                {Object.keys(props).map((key) => <PikkaCard key={props[key].id} {...props[key]} />)}
            </Container>
        </>
    );
}

export default PikkaCardDeck;
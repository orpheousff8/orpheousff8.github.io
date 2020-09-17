import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

const Calculator = (props) => {

    const [dataState, setDataState] = useState({
        formula: '',
        monitor: ''
    });

    return (
        <>
            <Container fluid>
                <Alert className="w-100" key="display" variant="dark" style={{ height: '100px' }}>{dataState.monitor}</Alert>
                <Row className="justify-content-center">
                    <Col className="mr-2 mr-sm-4" xs={8}>
                        <Row className="my-1">
                            <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark">7</Button></Col>
                            <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark">8</Button></Col>
                            <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark">9</Button></Col>
                        </Row>
                        <Row className="my-1">
                            <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark">4</Button></Col>
                            <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark">5</Button></Col>
                            <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark">6</Button></Col>
                        </Row>
                        <Row className="my-1">
                            <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark">1</Button></Col>
                            <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark">2</Button></Col>
                            <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark">3</Button></Col>
                        </Row>
                        <Row className="my-1">
                            <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark">.</Button></Col>
                            <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark">0</Button></Col>
                            <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="warning">=</Button></Col>
                        </Row>
                    </Col>
                    <Col className="" xs={3}>
                        <Button className="w-100 p-2 p-sm-5 p-md-4 mt-3 mt-sm-0 my-1 my-sm-2" size="lg" variant="dark">DEL</Button>
                        <Button className="w-100 p-2 p-sm-5 p-md-4 my-1 my-sm-2" size="lg" variant="dark">/</Button>
                        <Button className="w-100 p-2 p-sm-5 p-md-4 my-1 my-sm-2" size="lg" variant="dark">x</Button>
                        <Button className="w-100 p-2 p-sm-5 p-md-4 my-1 my-sm-2" size="lg" variant="dark">-</Button>
                        <Button className="w-100 h-25 p-2 p-sm-5 p-md-4 my-1 my-sm-2" size="lg" variant="dark">+</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Calculator;
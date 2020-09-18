import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

class Calculator extends React.Component {
    state = {
        formula: '',
        result: 0
    }

    handleClick = (e) => {
        
        const operant = e.target.value;

        if(operant < 48 || operant > 57) {
            if(this.state.formula === '') return;

            const lastChar = this.state.formula.charCodeAt(this.state.formula.length - 1);
            if(lastChar < 48 || lastChar > 57) return
        }

        this.setState((state, props)=> {
            return {formula: state.formula + String.fromCharCode(operant)};
        });
    }

    handleDel = () => {

        this.setState((state, props)=> {

            return {formula: state.formula.slice(0, -1)};
        });
    }

    render() {
        return (
            <>
                <Container fluid>
                    <Alert className="w-100 h1 text-right" key="display" variant="dark" style={{ height: '80px' }}>{this.state.formula}</Alert>
                    <Row className="justify-content-center">
                        <Col className="mr-2 mr-sm-4" xs={8}>
                            <Row className="my-1">
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={55} onClick={this.handleClick}>7</Button></Col>
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={56} onClick={this.handleClick}>8</Button></Col>
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={57} onClick={this.handleClick}>9</Button></Col>
                            </Row>
                            <Row className="my-1">
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={52} onClick={this.handleClick}>4</Button></Col>
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={53} onClick={this.handleClick}>5</Button></Col>
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={54} onClick={this.handleClick}>6</Button></Col>
                            </Row>
                            <Row className="my-1">
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={49} onClick={this.handleClick}>1</Button></Col>
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={50} onClick={this.handleClick}>2</Button></Col>
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={51} onClick={this.handleClick}>3</Button></Col>
                            </Row>
                            <Row className="my-1">
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={46} onClick={this.handleClick}>.</Button></Col>
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={48} onClick={this.handleClick}>0</Button></Col>
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="warning">=</Button></Col>
                            </Row>
                        </Col>
                        <Col className="" xs={3}>
                            <Button className="w-100 p-2 p-sm-5 p-md-4 mt-3 mt-sm-0 my-1 my-sm-2" size="lg" variant="dark" onClick={this.handleDel}>DEL</Button>
                            <Button className="w-100 p-2 p-sm-5 p-md-4 my-1 my-sm-2" size="lg" variant="dark" value={247} onClick={this.handleClick}>&divide;</Button>
                            <Button className="w-100 p-2 p-sm-5 p-md-4 my-1 my-sm-2" size="lg" variant="dark" value={215} onClick={this.handleClick}>&times;</Button>
                            <Button className="w-100 p-2 p-sm-5 p-md-4 my-1 my-sm-2" size="lg" variant="dark" value={8722} onClick={this.handleClick}>&minus;</Button>
                            <Button className="w-100 h-25 p-2 p-sm-5 p-md-4 my-1 my-sm-2" size="lg" variant="dark" value={43} onClick={this.handleClick}>+</Button>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Calculator;
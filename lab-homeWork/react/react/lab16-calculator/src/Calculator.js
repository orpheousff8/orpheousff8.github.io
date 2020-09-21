import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
// import Engine from './Engine';

const PERIOD = 46;
const LOWEST_DIGIT = 45;     //use Hyphen as signed operand
const HYPHEN = 45;
const HIGHEST_DIGIT = 57;
const PLUS = 43;
const MINUS = 8722;          //use minus symbol as operator
const TIMES = 215;
const DIVIDED = 247;

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monitor: '',
            inFix: []
        }
        this.handleDigit = this.handleDigit.bind(this);
        this.handleOperator = this.handleOperator.bind(this);
        this.handleDel = this.handleDel.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleEqual = this.handleEqual.bind(this);
    }

    handleDigit = (e) => {

        const ch = parseInt(e.target.value);
        const lastMonitorCh = this.state.monitor.slice(-1).charCodeAt(0);

        if (isNaN(lastMonitorCh) && ch === PERIOD) return;      //if monitor is empty, no '.' to be the first

        if (lastMonitorCh === PERIOD && ch === PERIOD) return;        //no double '.' allowed

        if (isNaN(lastMonitorCh) || lastMonitorCh < LOWEST_DIGIT || lastMonitorCh > HIGHEST_DIGIT) {      //monitor is empty or found operator

            this.setState((state, props) => {
                return {
                    monitor: state.monitor + String.fromCharCode(ch),
                    inFix: [...state.inFix, String.fromCharCode(ch)]
                };
            });
        }
        if (lastMonitorCh >= LOWEST_DIGIT && lastMonitorCh <= HIGHEST_DIGIT) {     //digit and '.'

            let tempInfix = [...this.state.inFix];
            const lastItemTempInFix = tempInfix.splice(-1);

            this.setState((state, props) => {
                return {
                    monitor: state.monitor + String.fromCharCode(ch),
                    inFix: [...tempInfix, lastItemTempInFix + String.fromCharCode(ch)]
                };
            });
        }
    }

    handleOperator = (e) => {

        const ch = parseInt(e.target.value);
        const lastMonitorCh = this.state.monitor.slice(-1).charCodeAt(0);

        if (isNaN(lastMonitorCh)) return;      //monitor is blank; no operator allowed to show first

        if (lastMonitorCh < LOWEST_DIGIT || lastMonitorCh > HIGHEST_DIGIT) return;      //no double operators allowed

        this.setState((state, props) => {
            return {
                monitor: state.monitor + String.fromCharCode(ch),
                inFix: [...state.inFix, String.fromCharCode(ch)]
            };
        });
    }

    handleClear = () => {

        this.setState((state, props) => {
            return {
                monitor: '',
                inFix: []
            };
        });
    }

    handleDel = () => {

        const lastMonitorCh = this.state.monitor.slice(-1).charCodeAt(0);

        if (isNaN(lastMonitorCh)) return;

        if (lastMonitorCh < LOWEST_DIGIT || lastMonitorCh > HIGHEST_DIGIT) {      //found operator, delete whole item in inFix

            this.setState((state, props) => {
                return {
                    monitor: state.monitor.slice(0, -1),
                    inFix: state.inFix.slice(0, -1)
                };
            });
        }
        else {      //found operand, delete one letter from last string of inFix, if one letter left on item: delete item
            this.setState((state, props) => {
                return {
                    monitor: state.monitor.slice(0, -1),
                    inFix: (state.inFix[this.state.inFix.length - 1].length > 1) ? 
                    [...state.inFix.slice(0, -1), state.inFix[state.inFix.length - 1].slice(0, -1)] : [...state.inFix.slice(0, -1)]
                };
            });
        }
    }

    handleEqual = () => {

        const postFix = this.convertToPostfix();
        const result = this.calculate(postFix);

        this.setState((state, props) => {

            return {
                // monitor: String(result).replace(String.fromCharCode(HYPHEN), String.fromCharCode(MINUS)),
                monitor: String(result),
                inFix: [String(result)]
            };
        });
    }

    convertToPostfix = () => {

        let inFix = [...this.state.inFix];

        if (inFix.length === 0) return;

        let operatorStack = [];
        let postFix = [];

        inFix.forEach((item, index) => {

            const ch = item.charCodeAt(0);      //as operators have only 1 character, so we check only 1 character

            if (ch >= LOWEST_DIGIT && ch <= HIGHEST_DIGIT) {
                postFix.push(item);       //found digit, push to postfix queue
                return;
            }

            if (operatorStack.length === 0) {
                operatorStack.push(item);     //push operator if operator stack is empty
                return;
            }

            const topOperatorStack = operatorStack[operatorStack.length - 1];
            const topOperatorStackCh = topOperatorStack.charCodeAt(0);

            if (this.findPrecedence(ch) > this.findPrecedence(topOperatorStackCh)) {
                operatorStack.push(item);     //push operator if precedence is high
                return;
            }
            else {
                while (operatorStack.length > 0 && (this.findPrecedence(ch) <= this.findPrecedence(topOperatorStackCh))) {
                    postFix.push(operatorStack.pop());       //store and pop until higher precedence is found in the operator stack
                }
                operatorStack.push(item);
                return;
            }
        });

        while (operatorStack.length > 0) {
            postFix.push(operatorStack.pop());         //store and pop until operator stack empty
        }

        return postFix;
    }

    findPrecedence = (ch) => {

        switch (ch) {
            case PLUS:
            case MINUS:
                return 1;       //Precedence of + or - is 1
            case TIMES:
            case DIVIDED:
                return 2;       //Precedence of * or / is 2
            default:
                return -1;
        }
    }

    calculate = (postFix) => {

        let calcStack = [];

        postFix.forEach((item, index) => {

            const ch = item.charCodeAt(0);      //operators have only 1 letter, so let check only 1 letter
            let tempDigit;

            switch (ch) {
                case PLUS:
                    calcStack.push(calcStack.pop() + calcStack.pop());
                    break;
                case MINUS:
                    tempDigit = calcStack.pop();
                    calcStack.push(calcStack.pop() - tempDigit);
                    break;
                case TIMES:
                    calcStack.push(calcStack.pop() * calcStack.pop());
                    break;
                case DIVIDED:
                    tempDigit = calcStack.pop();
                    calcStack.push(calcStack.pop() / tempDigit);
                    break;
                default:
                    calcStack.push(parseFloat(item));
            }
        });

        return calcStack.pop();
    }

    render() {
        return (
            <>
                <Container fluid>
                    <Alert className="w-100 h1 text-right" key="display" variant="dark" style={{ height: '80px' }}>{this.state.monitor}</Alert>
                    {/* <Engine buttonValue={this.buttonValue} /> */}
                    <Row className="justify-content-center">
                        <Col className="mr-2 mr-sm-4" xs={8}>
                            <Row className="my-1">
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={55} onClick={this.handleDigit}>7</Button></Col>
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={56} onClick={this.handleDigit}>8</Button></Col>
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={57} onClick={this.handleDigit}>9</Button></Col>
                            </Row>
                            <Row className="my-1">
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={52} onClick={this.handleDigit}>4</Button></Col>
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={53} onClick={this.handleDigit}>5</Button></Col>
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={54} onClick={this.handleDigit}>6</Button></Col>
                            </Row>
                            <Row className="my-1">
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={49} onClick={this.handleDigit}>1</Button></Col>
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={50} onClick={this.handleDigit}>2</Button></Col>
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={51} onClick={this.handleDigit}>3</Button></Col>
                            </Row>
                            <Row className="my-1">
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={PERIOD} onClick={this.handleDigit}>.</Button></Col>
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="dark" value={48} onClick={this.handleDigit}>0</Button></Col>
                                <Col xs={4}><Button className="w-100 p-4 p-sm-5" size="lg" variant="warning" onClick={this.handleEqual}>=</Button></Col>
                            </Row>
                        </Col>
                        <Col className="" xs={3}>
                            <Button className="w-100 p-2 p-sm-4 p-md-4 mt-2 mt-sm-2 my-1 my-sm-1" size="lg" variant="info" onClick={this.handleClear}>C</Button>
                            <Button className="w-100 p-2 p-sm-4 p-md-4 my-1 my-sm-1" size="lg" variant="dark" onClick={this.handleDel}>DEL</Button>
                            <Button className="w-100 p-2 p-sm-4 p-md-4 my-1 my-sm-1" size="lg" variant="dark" value={DIVIDED} onClick={this.handleOperator}>&divide;</Button>
                            <Button className="w-100 p-2 p-sm-4 p-md-4 my-1 my-sm-1" size="lg" variant="dark" value={TIMES} onClick={this.handleOperator}>&times;</Button>
                            <Button className="w-100 p-2 p-sm-4 p-md-4 my-1 my-sm-1" size="lg" variant="dark" value={MINUS} onClick={this.handleOperator}>&minus;</Button>
                            <Button className="w-100 p-2 p-sm-4 p-md-4 my-1 my-sm-1" size="lg" variant="dark" value={PLUS} onClick={this.handleOperator}>+</Button>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Calculator;
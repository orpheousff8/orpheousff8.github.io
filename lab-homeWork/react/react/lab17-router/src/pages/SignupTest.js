import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = require('../Validator').state;
        this.onFormChange = require('../Validator').onFormChange;
        this.onFormSubmit = require('../Validator').onFormSubmit;
        this.getInputClass = require('../Validator').getInputClass;
        this.getErrorMessage = require('../Validator').getErrorMessage;

        this.getInputClass = this.getInputClass.bind(this);
    }

    state;
    onFormChange;
    onFormSubmit;
    getInputClass;
    getErrorMessage;

    render() {
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col sm="3" className="mt-5"></Col>
                        <Col sm="6" className="mt-5">
                            <Card>
                                <Card.Body className="ml-3 mr-3 mt-5 mb-1">
                                    <form onSubmit={this.onFormSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="username">User Name</label>
                                            <input
                                                type="text"
                                                className={this.getInputClass('username')}
                                                id="username"
                                                name="username"
                                                onChange={this.onFormChange}
                                            />
                                            <div className="invalid-feedback">
                                                {this.getErrorMessage('username')}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input
                                                type="password"
                                                className={this.getInputClass('password')}
                                                id="password"
                                                name="password"
                                                onChange={this.onFormChange}
                                            />
                                            <div className="invalid-feedback">

                                                {this.getErrorMessage('password').split(",").map((item, index) => {
                                                    return <div key={index}>{item}</div>;
                                                })}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="confirmPassword">Confirm Password</label>
                                            <input
                                                type="password"
                                                className={this.getInputClass('confirmPassword')}
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                onChange={this.onFormChange}
                                            />
                                            <div className="invalid-feedback">
                                                {this.getErrorMessage('confirmPassword')}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                className={this.getInputClass('email')}
                                                id="email"
                                                name="email"
                                                onChange={this.onFormChange}
                                            />
                                            <div className="invalid-feedback">
                                                {this.getErrorMessage('email')}
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <Button type="submit" variant="primary" disabled={!this.state.formValid}>Register</Button>
                                        </div>
                                    </form>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm="3" className="mt-5"></Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default Signup;
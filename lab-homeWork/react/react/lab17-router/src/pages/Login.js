import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formElements: {
                username: {
                    type: 'text',
                    value: '',
                    validator: {
                        required: true,
                        minLength: 5,
                        maxLength: 15
                    },
                    // touched: false,
                    touched: true,
                    error: { status: true, message: '' }
                },
                password: {
                    type: 'password',
                    value: '',
                    validator: {
                        required: true,
                        minLength: 8,
                        pattern: 'password'
                    },
                    // touched: false,
                    touched: true,
                    error: { status: true, message: '' }
                }
            },
            formValid: false
        }
    }
    state;

    onFormChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let updatedForm = { ...this.state.formElements };
        updatedForm[name].value = value;
        updatedForm[name].touched = true;
        const validatorObject = this.checkValidator(value, updatedForm[name].validator);
        updatedForm[name].error = {
            status: validatorObject.status,
            message: validatorObject.message
        }
        let formStatus = true;
        for (let name in updatedForm) {
            if (updatedForm[name].validator.required) {
                formStatus = !updatedForm[name].error.status && formStatus;
            }
        }
        this.setState((state, props) => {
            return (
                {
                ...state,
                formElements: updatedForm,
                formValid: formStatus
                }
            );
        });
    }

    onFormSubmit = (e) => {

        e.preventDefault();
        const formData = {};

        for (let name in this.state.formElements) {
            formData[name] = this.state.formElements[name].value;
        }

        console.log(formData);
    }

    checkValidator = (value, rule) => {

        let valid = true;
        let message = '';

        if (value.trim().length === 0 && rule.required) {
            valid = false;
            message = 'Required.';
        }
        if (value.length < rule.minLength && valid) {
            valid = false;
            message = `Less than ${rule.minLength} characters.`;
        }
        if (value.length > rule.maxLength && valid) {
            valid = false;
            message = `Greater than ${rule.maxLength} characters.`;
        }
        if (rule.pattern === 'email' && valid) {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                valid = false;
                message = 'Invalid email pattern.';
            }
        }
        if (rule.pattern === 'password' && valid) {
            if (!/(?=.*[a-z])/.test(value)) {
                valid = false;
                message += 'Password must contain at least 1 lower-case Latin letter.';
            }
            if (!/(?=.*[A-Z])/.test(value)) {
                valid = false;
                message += ',Password must contain at least 1 upper-case Latin letter.';
            }
            if (!/(?=.*[0-9])/.test(value)) {
                valid = false;
                message += ',Password must contain at least 1 digit.';
            }
        }

        return { status: !valid, message: message };
    }

    getInputClass = (name) => {

        const elementErrorStatus = this.state.formElements[name].error.status;

        return elementErrorStatus && this.state.formElements[name].touched ?
            'form-control is-invalid' :
            'form-control is-valid';
    }

    getErrorMessage = (name) => this.state.formElements[name].error.message;

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
                                                aria-describedby="validationFeedback1"
                                                onChange={this.onFormChange}
                                            />
                                            <div className="invalid-feedback" id="validationFeedback1">
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
                                                aria-describedby="validationFeedback2"
                                                onChange={this.onFormChange}
                                            />
                                            <div className="invalid-feedback" id="validationFeedback2">
                                                
                                                {this.getErrorMessage('password').split(",").map((item, index) => {
                                                    return <div key={index}>{item}</div>;
                                                })}
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <Link className="mr-3" to='/signup'>Register</Link>
                                            <Button className="ml-3" type="submit" variant="primary" disabled={!this.state.formValid}>Login</Button>
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
export default Login;
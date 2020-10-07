import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const WithValidator = (props) => {

    const [state, setState] = useState(
        {
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
                email: {
                    type: 'email',
                    value: '',
                    validator: {
                        required: props.children === 'SignUp' ? true : false,
                        pattern: 'email'
                    },
                    // touched: false,
                    touched: true,
                    error: { status: true, message: '' }
                },
                password: {
                    type: 'password',
                    value: '',
                    validator: {
                        required: props.children === 'CreatePikka' ? false : true,
                        minLength: 8,
                        pattern: 'password'
                    },
                    // touched: false,
                    touched: true,
                    error: { status: true, message: '' }
                },
                confirmPassword: {
                    type: 'confirmPassword',
                    value: '',
                    validator: {
                        required: props.children === 'SignUp' ? true : false,
                        pattern: 'confirmPassword'
                    },
                    // touched: false,
                    touched: true,
                    error: { status: true, message: '' }
                },
                image: {
                    type: 'image',
                    value: '',
                    validator: {
                        require: props.children === 'CreatePikka' ? true : false,
                        pattern: 'image'
                    },
                    // touched: false,
                    touched: true,
                    error: { status: true, message: '' }
                }
            },
            formValid: false
        }
    );

    const [authState, setAuthState] = useState(false);

    const history = useHistory();

    const onFormChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let updatedForm = { ...state.formElements };
        updatedForm[name].value = value;
        updatedForm[name].touched = true;
        const validatorObject = checkValidator(value, updatedForm[name].validator);
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
        setState((state, props) => {
            return (
                {
                    ...state,
                    formElements: updatedForm,
                    formValid: formStatus
                }
            );
        });
    }

    const onFormSubmit = (e) => {

        e.preventDefault();
        const formData = {};

        for (let name in state.formElements) {
            formData[name] = state.formElements[name].value;
        }

        // console.log(formData);
        submit(formData);
    }

    const checkValidator = (value, rule) => {

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
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {        //regex - regular expression
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
        if (rule.pattern === 'confirmPassword' && valid) {
            if (value !== state.formElements['password'].value) {
                valid = false;
                message = 'Must be the same as password.'
            }
        }
        if (rule.pattern === 'image' && valid) {
            if (!(/\.(gif|jpe?g|png)$/i).test(value)) {
                valid = false;
                message = "File extension must be .gif, .jpeg, .png or .webp"
            }
        }

        return { status: !valid, message: message };
    }

    const getInputClass = (name) => {

        const elementErrorStatus = state.formElements[name].error.status;

        return elementErrorStatus && state.formElements[name].touched ?
            'form-control is-invalid' :
            'form-control is-valid';
    }

    const getErrorMessage = (name) => state.formElements[name].error.message;

    const renderComponent = () => {
        switch (props.children) {
            case 'SignUp':
                return (
                    <Form onSubmit={onFormSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="username">User Name</Form.Label>
                            <Form.Control
                                type="text"
                                className={getInputClass('username')}
                                id="username"
                                name="username"
                                onChange={onFormChange}
                            />
                            <div className="invalid-feedback">
                                {getErrorMessage('username')}
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <Form.Control
                                type="password"
                                className={getInputClass('password')}
                                id="password"
                                name="password"
                                onChange={onFormChange}
                            />
                            <div className="invalid-feedback">
                                {
                                    getErrorMessage('password').split(",").map((item, index) => {
                                        return <div key={index}>{item}</div>;
                                    })
                                }
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                className={getInputClass('confirmPassword')}
                                id="confirmPassword"
                                name="confirmPassword"
                                onChange={onFormChange}
                            />
                            <div className="invalid-feedback">
                                {getErrorMessage('confirmPassword')}
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control
                                type="email"
                                className={getInputClass('email')}
                                id="email"
                                name="email"
                                onChange={onFormChange}
                            />
                            <div className="invalid-feedback">
                                {getErrorMessage('email')}
                            </div>
                        </Form.Group>
                        <div className="text-center">
                            <Button type="submit" variant="primary" disabled={!state.formValid}>Register</Button>
                        </div>
                    </Form>
                );
            case 'Login':
                return (
                    <Form onSubmit={onFormSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="username">User Name</Form.Label>
                            <Form.Control
                                type="text"
                                className={getInputClass('username')}
                                id="username"
                                name="username"
                                onChange={onFormChange}
                            />
                            <div className="invalid-feedback">
                                {getErrorMessage('username')}
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <input
                                type="password"
                                className={getInputClass('password')}
                                id="password"
                                name="password"
                                onChange={onFormChange}
                            />
                            <div className="invalid-feedback">
                                {getErrorMessage('password').split(",").map((item, index) => {
                                    return <div key={index}>{item}</div>;
                                })}
                            </div>
                        </Form.Group>
                        <div className="text-center">
                            <Link className="mr-3" to='/signup'>Register</Link>
                            <Button className="ml-3" type="submit" variant="primary" disabled={!state.formValid}>Login</Button>
                        </div>
                    </Form>
                );
            case 'CreatePikka':
                return (
                    <Form onSubmit={onFormSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="username">Caption</Form.Label>
                            <Form.Control
                                type="text"
                                className={getInputClass('username')}
                                id="username"
                                name="username"
                                onChange={onFormChange}
                            />
                            <div className="invalid-feedback">
                                {getErrorMessage('username')}
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <Form.File
                                label="Select Pikka image"
                                className={getInputClass('image')}
                                id="image"
                                name="image"
                                onChange={onFormChange}
                            />
                        </Form.Group>
                        <br/>
                        <div className="text-center">
                            <Button className="ml-3" type="submit" variant="primary" disabled={!state.formValid}>Create</Button>
                        </div>
                    </Form>
                );
            default:
                return <></>
        }
    }

    const submit = async (formData) => {
        const socket = 'http://localhost:3001';

        switch (props.children) {
            case 'Login':
                try {
                    const response = await fetch(socket + '/login', {
                        method: 'post',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(formData)
                    });
                    const data = await response.text();
                    // console.log(response);
                    if (response.status === 200) {
                        setAuthState(true);
                    }
                    console.log(data);
                }
                catch (err) {
                    console.log(`error: ${err}`);
                }
                break;
            case 'SignUp':
                try {
                    const response = await fetch(socket + '/signup', {
                        method: 'post',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(formData)
                    });
                    const data = await response.text();
                    // console.log(response);
                    console.log(data);
                }
                catch (err) {
                    console.log(`error: ${err}`);
                }
                break;
            case 'CreatePikka':
                try {
                    const response = await fetch(socket + '/create', {
                        method: 'post',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(formData)
                    });
                    const data = await response.text();
                    // console.log(response);
                    console.log(data);
                    if (response.status === 201) {
                        history.push('/');
                    }
                }
                catch (err) {
                    console.log(`error: ${err}`);
                }
                break;
            default:
        }
    }

    return (
        <Container fluid>
            <Row>
                <Col sm="3" className="mt-5"></Col>
                <Col sm="6" className="mt-5">
                    <Card>
                        <Card.Body className="ml-3 mr-3 mt-5 mb-1">
                            {renderComponent()}
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm="3" className="mt-5"></Col>
            </Row>
        </Container>
    );
}
export default WithValidator;
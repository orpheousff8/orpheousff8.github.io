import { useState } from 'react';

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
                    required: true,
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
                    required: true,
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
                    required: true,
                    pattern: 'confirmPassword'
                },
                // touched: false,
                touched: true,
                error: { status: true, message: '' }
            }
        },
        formValid: false
    }
);

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

    console.log(formData);
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
    if (rule.pattern === 'confirmPassword' && valid) {
        if (value !== state.formElements['password'].value) {
            valid = false;
            message = 'Must be the same as password.'
        }
    }

    return { status: !valid, message: message };
}

const getInputClass = (name) => {

    const elementErrorStatus = state.formElements[name].error.status;

    return elementErrorStatus && state.formElements[name].touched ? 'form-control is-invalid' : 'form-control is-valid';
}

const getErrorMessage = (name) => state.formElements[name].error.message;

exports.state = state;
exports.onFormChange = onFormChange;
exports.onFormSubmit = onFormSubmit;
exports.getInputClass = getInputClass;
exports.getErrorMessage = getErrorMessage;
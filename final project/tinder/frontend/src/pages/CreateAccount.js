import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Alert, Form, Input, Row, Col, Checkbox, Button } from 'antd';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
        md: { span: 8 }
    },
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0
        },
        sm:
        {
            span: 16,
            offset: 0
        },
        md:
        {
            span: 16,
            offset: 0
        }
    }
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 24,
            offset: 0,
        },
    }
};

const CreateAccount = (props) => {
    const [form] = Form.useForm();

    const [message, setMessage] = useState({
        isVisible: false,
        text: ""
    });

    const history = useHistory();

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        let res;
        try {
            res = await axios.post(BACKEND_URL + "/users/signup", values);
            if (res.status === 201) {
                console.log(res.data);
                history.push("/preferences");
            } else {
                console.log(res.status);
                setMessage({ ...message, isVisible: true, text: res.data });
                form.resetFields();
            }
        } catch (err) {
            console.log(err);
            setMessage({ ...message, isVisible: true, text: err.message });
            form.resetFields();
        }
    };

    return (
        <div className="CreateAccount">
            {
                message.isVisible &&
                <Alert
                    message={message.text}
                    banner
                    closable
                    onClose={()=>setMessage({...message, isVisible:false, text:""})}
                />
            }
            <Row justify="center">
                <Col></Col>
                <Col xs={20} md={16}>
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        initialValues={{
                        }}
                        scrollToFirstError
                    >
                        <Form.Item
                            name="name"
                            label="Name"
                            rules={[
                                {
                                    required: true,
                                    whitespace: true,
                                    min: 2,
                                    max: 36,
                                    message: 'Please input your name between 2 and 36 letters!'
                                }
                            ]}
                        >
                            <Input placeholder="Name" />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your Email!',
                                },
                            ]}
                        >
                            <Input placeholder="Email" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    whitespace: true,
                                    min: 6,
                                    max: 36,
                                    message: 'Please input your password between 6 and 36 characters!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password placeholder="Password" />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('The two passwords that you entered do not match!');
                                    },
                                }),
                            ]}
                        >
                            <Input.Password placeholder="Confirm Password" />
                        </Form.Item>

                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                                },
                            ]}
                            {...tailFormItemLayout}
                        >
                            <Checkbox>
                                I confirm that I am over 18 year-old.
                            </Checkbox>
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" danger>
                                Create Account
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </div>
    );
};

export default CreateAccount;
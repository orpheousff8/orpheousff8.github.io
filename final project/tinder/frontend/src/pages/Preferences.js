import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Form, Input, Row, Col, Checkbox, Radio, Button, Upload, message } from 'antd';
import axios from 'axios';
import { LoadingOutlined, PlusOutlined, CustomerServiceOutlined, CoffeeOutlined, BugOutlined, SkinOutlined, ShoppingCartOutlined, CompassOutlined } from '@ant-design/icons';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

const Preferences = (props) => {

    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [selectedBadge, setSelectedBadge] = useState();

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    const handleChange = (info) => {
        if (info.file.status === "uploading") {
            setLoading(true);
            return;
        }
        if (info.file.status === "done") {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (imageUrl) => {
                setImageUrl(imageUrl);
                setLoading(false);
            });
        }
    }

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        let res;
        try {
            // res = await axios.post(BACKEND_URL + "/users/savePreferences", values);
            res = await axios.post(BACKEND_URL + "/upload", values);
            if (res.status === 201) {
                console.log(res.data);
                // history.push("/preferences");
            } else {
                console.log(res.status);
                // setMessage({ ...message, isVisible: true, text: res.data });
                form.resetFields();
                setSelectedBadge();
            }
        } catch (err) {
            console.log(err);
            // setMessage({ ...message, isVisible: true, text: err.message });
            form.resetFields();
            setSelectedBadge();
        }
    };

    return (
        <div className="Preferences">
            <Row justify="center">
                <Col></Col>
                <Col xs={20} md={16}>
                    <Form
                        name="validate_other"
                        form={form}
                        onFinish={onFinish}
                        initialValues={{
                        }}
                    >

                        <Upload
                            //name=x; must be the same as in upload.single(x) of multer router middleware of backend.
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            action={BACKEND_URL + "/upload/img"}
                            beforeUpload={(file) => beforeUpload(file)}
                            onChange={(info) => handleChange(info)}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please upload your avatar!',
                                }
                            ]}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>

                        <Form.Item
                            name="radio-button"
                            label="I am:"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please pick an item!',
                                },
                            ]}
                        >
                            <Radio.Group>
                                <Radio.Button className="button" value="male">Male</Radio.Button>
                                <Radio.Button className="button" value="female">Female</Radio.Button>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item
                            name="checkbox-group"
                            label="I'd prefer:"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please pick an item!',
                                },
                            ]}
                        >
                            <Checkbox.Group>
                                <Checkbox value="male">Male</Checkbox>
                                <Checkbox value="female">Female</Checkbox>
                            </Checkbox.Group>
                        </Form.Item>

                        <Form.Item>
                            <p style={{ textAlign: "center", fontWeight: "bold" }}>My top interest/activity</p>

                            <div className="badgeContainer">
                                <div
                                    className={(selectedBadge === "music" ? "badgeBox selected" : "badgeBox")}
                                    onClick={() => setSelectedBadge("music")}
                                >
                                    <CustomerServiceOutlined className="badge icon" />
                                    <p className="badge text">music</p>
                                </div>
                                <div
                                    className={(selectedBadge === "coffee" ? "badgeBox selected" : "badgeBox")}
                                    onClick={() => setSelectedBadge("coffee")}
                                >
                                    <CoffeeOutlined className="badge icon" />
                                    <p className="badge text">coffee</p>
                                </div>
                                <div
                                    className={(selectedBadge === "insects" ? "badgeBox selected" : "badgeBox")}
                                    onClick={() => setSelectedBadge("insects")}
                                >
                                    <BugOutlined className="badge icon" />
                                    <p className="badge text">insects</p>
                                </div>
                                <div
                                    className={(selectedBadge === "fashion" ? "badgeBox selected" : "badgeBox")}
                                    onClick={() => setSelectedBadge("fashion")}
                                >
                                    <SkinOutlined className="badge icon" />
                                    <p className="badge text">fashion</p>
                                </div>
                                <div
                                    className={(selectedBadge === "shopping" ? "badgeBox selected" : "badgeBox")}
                                    onClick={() => setSelectedBadge("shopping")}
                                >
                                    <ShoppingCartOutlined className="badge icon" />
                                    <p className="badge text">shopping</p>
                                </div>
                                <div
                                    className={(selectedBadge === "camping" ? "badgeBox selected" : "badgeBox")}
                                    onClick={() => setSelectedBadge("camping")}
                                >
                                    <CompassOutlined className="badge icon" />
                                    <p className="badge text">camping</p>
                                </div>
                            </div>
                        </Form.Item>
                        <Form.Item >
                            <Button
                                type="primary"
                                htmlType="submit"
                                danger
                                disabled={(selectedBadge === undefined) ? true : false}
                            >
                                Save my preferences
                            </Button>
                        </Form.Item>

                    </Form>
                </Col>
                <Col></Col>
            </Row>

        </div>
    );
};

export default Preferences;
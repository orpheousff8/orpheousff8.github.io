import React from 'react';
import { Row, Col, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import { FireOutlined } from '@ant-design/icons'

const Home = (props) => {
    return (
        <div className="Home">
            <Row justify="center">
                <Col xs={4}></Col>
                <Col>
                    <FireOutlined className="logo icon"/>
                    <span className="logo text">tinder</span>
                </Col>
                <Col xs={4}></Col>
            </Row>
            <Row justify="center">
                <Col></Col>
                <Col>
                    <Space direction="vertical" align="center">
                        <Link to="/login">
                            <Button xs={4} size="large">
                                Login
                            </Button>
                        </Link>
                        <Link to="/create">
                            <Button xs={4} size="large" danger>
                                Create Account
                            </Button>
                        </Link>
                    </Space>
                </Col>
                <Col></Col>
            </Row>
        </div>
    );
}

export default Home;
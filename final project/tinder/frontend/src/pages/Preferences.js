import React from 'react';
import { useHistory } from "react-router-dom";
import { Form, Input, Row, Col, Checkbox, Button } from 'antd';
import axios from 'axios';
import { CustomerServiceOutlined, CoffeeOutlined, BugOutlined, SkinOutlined, ShoppingCartOutlined, CompassOutlined } from '@ant-design/icons';

const Preferences = (props) => {

    return (
        <div className="Preferences">
            <div className="badgeContainer">
                <div className="badgeBox">
                    <CustomerServiceOutlined className="badge icon" />
                    <p className="badge text">music</p>
                </div>
                <div className="badgeBox">
                    <CoffeeOutlined className="badge icon" />
                    <p className="badge text">coffee</p>
                </div>
                <div className="badgeBox">
                    <BugOutlined className="badge icon" />
                    <p className="badge text">insects</p>
                </div>
                <div className="badgeBox">
                    <SkinOutlined className="badge icon" />
                    <p className="badge text">fashion</p>
                </div>
                <div className="badgeBox">
                    <ShoppingCartOutlined className="badge icon" />
                    <p className="badge text">shopping</p>
                </div>
                <div className="badgeBox">
                    <CompassOutlined className="badge icon" />
                    <p className="badge text">camping</p>
                </div>
            </div>
        </div>
    );
};

export default Preferences;
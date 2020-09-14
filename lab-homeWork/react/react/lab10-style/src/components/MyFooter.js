import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'

import Logo from '../img/pikkanode.png';

const MyFooter = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand  href="#home">
                    <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Pikka node
                </Navbar.Brand>
            </Navbar>
        </>
    );
}

export default MyFooter;
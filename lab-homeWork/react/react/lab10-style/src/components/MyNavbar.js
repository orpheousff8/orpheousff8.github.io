import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Logo from '../img/pikkanode.png';

const MyNavbar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Pikka node
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#createPikka">Create Pikka</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#signUp">Sign up</Nav.Link>
                    <Nav.Link href="#signIn">Sign in</Nav.Link>
                    <Nav.Link href="#signUp">Sign out</Nav.Link>
                    </Nav>
            </Navbar>
        </>
    );
}

export default MyNavbar;
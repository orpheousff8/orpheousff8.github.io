import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from './logo.svg'

const MyNavbar = (props) => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand as={Link} to='/'>
                    <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Lab React Router
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/signup'>Signup</Nav.Link>
                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}
export default MyNavbar;
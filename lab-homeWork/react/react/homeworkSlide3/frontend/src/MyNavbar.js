import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import action from './redux/action';

const MyNavbar = (props) => {

    const userSelector = useSelector(state => state.user);
    const dispatch = useDispatch();
    // const history = useHistory();       //use to push page back to '/'

    const logoutUser = () => {
        dispatch(action.logoff());
    }

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
                    <Nav.Link as={Link} to='/signup'>Sign up</Nav.Link>
                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                    <Nav.Link as={Link} to='/create'>Create Pikka</Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>{userSelector !== "guest" ? `Signed in as: ${userSelector}` : 
                    `Hello guest. please`}</Navbar.Text>
                    {
                        userSelector !== "guest" ? <Nav.Link as={Link} to='/login' onClick={() => logoutUser()} >logoff</Nav.Link> : 
                        <Nav.Link as={Link} to='/login'>login</Nav.Link>
                    }
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
export default MyNavbar;
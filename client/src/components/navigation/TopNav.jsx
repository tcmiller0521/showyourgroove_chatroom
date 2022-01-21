import { Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import HalfLogo from '../../assets/images/showyourgroove-halflogo.png'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { selectUser } from "../../state/userSlice";
import { logout } from '../../state/authSlice';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import React from "react";

const user = JSON.parse(localStorage.getItem('profile'));


const TopNav = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const logoutUser = () => {
        dispatch(logout());

        history.push('/')
    }

    return (
        <Navbar className="bg-secondary pb-1 ps-5" expand="lg" >
            <Container fluid className="d-flex justify-content-center ms-5 ps-5">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div>
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav.Link href="/#">
                            <h2 className="text-dark">Home</h2>
                        </Nav.Link>
                        <Nav.Link href="/aboutus">
                            <h2 className="text-dark">About</h2>
                        </Nav.Link>
                    </Navbar.Collapse>
                </div>
                <Navbar.Brand href="#home"><img src={HalfLogo} /></Navbar.Brand>
                <div>
                    <Navbar.Collapse>
                        <Nav.Link href="/firstchatroom">
                            <h2 className="text-dark">Chat</h2>
                        </Nav.Link>
                        <Nav.Link href="/support">
                            <h2 className="text-dark">Support</h2>
                        </Nav.Link>
                    </Navbar.Collapse>
                </div>
                {(!user) && (
                    <Button href="/login" className="btn-dark me-3">Login</Button>
                )}
                {(!user) && (
                    <Button href="/register" className="btn-dark">Register</Button>
                )}
                {(user?.result) && (
                    <Button href="/profile" className="btn-dark me-3">Profile</Button>
                )}
                {(user?.result) && (
                    <Button onClick={logoutUser} className="btn-dark">Logout</Button>
                )}
            </Container>
        </Navbar>
    )
}

export default TopNav;


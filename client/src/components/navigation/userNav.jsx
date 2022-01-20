import { Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import HalfLogo from '../../assets/images/showyourgroove-halflogo.png'
import { Link, useHistory } from "react-router-dom";
import { logout, selectAuth } from '../../state/authSlice';
import { useDispatch, useSelector } from "react-redux";
import React from "react";



const UserNav = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const logoutUser = () => {
        dispatch(logout());

        history.push('/')
    }

    const userInfo = useSelector(selectAuth)
    

    return (
        <Navbar className="pb-1 ps-5" style={{backgroundColor: `${userInfo.color}` }} expand="lg" >
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
                <Button href="/profile" className="btn-dark me-3">Profile</Button>
                <Button onClick={logoutUser} className="btn-dark">Logout</Button>
            </Container>
        </Navbar>
    )
}

export default UserNav;


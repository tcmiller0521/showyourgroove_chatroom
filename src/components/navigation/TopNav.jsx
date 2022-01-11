import { Nav } from "react-bootstrap"
import { Navbar, NavDropdown } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import HalfLogo from '../../assets/images/showyourgroove-halflogo.png'
import { Link } from "react-router-dom";

import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { logout } from "../../state/authSlice"
import eventBus from '../../common/EventBus';




const TopNav = () => {

    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);

    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
        if (currentUser) {
            setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
            setShowAdminBoard(currentUser.roles.includes("ROLES_ADMIN"));
        } else {
            setShowModeratorBoard(false);
            setShowAdminBoard(false);
        }

        eventBus.on("logout", () => {
            logOut();
        });

        return () => {
            eventBus.remove("logout");
        };
    }, [currentUser, logOut]);


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
                <Button className="btn-dark me-3">
                    <Link to="/login" >
                        Login
                    </Link>
                </Button>
                <Button className="btn-dark">
                    <Link to="/register" >
                        Register
                    </Link>
                </Button>
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                    {showModeratorBoard && (
                        <NavDropdown.Item>
                            <Link to="/mod">
                                Moderator Board
                            </Link>
                        </NavDropdown.Item>
                    )}

                    {showAdminBoard && (
                        <NavDropdown.Item>
                            <Link to="/admin">
                                Admin Board
                            </Link>
                        </NavDropdown.Item>
                    )}

                    {currentUser && (
                        <NavDropdown.Item>
                            <Link to="/user">
                                User
                            </Link>
                        </NavDropdown.Item>
                    )}

                    {currentUser ? (
                        <div>
                            <NavDropdown.Item>
                                <Link to="/profile">
                                    {currentUser.username}
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <a href="/login" onClick={logOut}>
                                    Logout
                                </a>
                            </NavDropdown.Item>
                        </div>
                    ) : (<div>
                        <NavDropdown.Item>
                            <Link to="/login">
                                Login
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/register">
                                Register
                            </Link>
                        </NavDropdown.Item>
                    </div>
                    )}
                </NavDropdown>
            </Container>
        </Navbar>
    )
}

export default TopNav;


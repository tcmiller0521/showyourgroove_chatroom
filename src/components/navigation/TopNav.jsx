import { Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import HalfLogo from '../../assets/images/showyourgroove-halflogo.png'
import { Link } from "react-router-dom";


const TopNav = () => {
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
                <Button href="/login" className="btn-dark me-3">Login</Button>
                <Button href="/register" className="btn-dark">Register</Button>
            </Container>
        </Navbar>
    )
}

export default TopNav;

<Navbar className="bg-secondary pb-1" expand="lg" >
    <Container fluid className="d-flex justify-content-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Row>
            <Col>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/#">
                            <h2 className="text-dark py-3">Home</h2>
                        </Nav.Link>
                        <Nav.Link href="/aboutus">
                            <h2 className="text-dark py-3">About</h2>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Col>
            <Col className="d-flex justify-content-center">
                <Navbar.Brand href="#home"><img src={HalfLogo} /></Navbar.Brand>
            </Col>
            <Col>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/firstchatroom">
                            <h2 className="text-dark py-3">Chat</h2>
                        </Nav.Link>
                        <Nav.Link href="/support">
                            <h2 className="text-dark py-3">Support</h2>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Col>
        </Row>
    </Container>
</Navbar>
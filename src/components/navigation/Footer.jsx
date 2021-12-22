import { Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import HalfLogo from '../../assets/images/showyourgroove-halflogo.png'

const Footer = () => {
    return (
        <Navbar className="bg-secondary pb-1" expand="lg">
    <Container fluid className="d-flex justify-content-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Row>
            <Col>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">
                            <h2 className="text-dark py-3">Home</h2>
                        </Nav.Link>
                        <Nav.Link href="#home">
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
                        <Nav.Link href="#home">
                            <h2 className="text-dark py-3">Chat</h2>
                        </Nav.Link>
                        <Nav.Link href="#home">
                            <h2 className="text-dark py-3">Support</h2>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Col>
        </Row>
    </Container>
</Navbar>
    )
}

export default Footer;
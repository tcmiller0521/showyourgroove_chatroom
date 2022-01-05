import TopNav from "./navigation/TopNav";
import Footer from "./navigation/Footer";
import Container from 'react-bootstrap/Container'
import './authentication/login.css'
import { Row, Col } from 'react-bootstrap'
import { Image } from "react-bootstrap";
import LoginWelcome from '../assets/images/login_welcome-02.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <>
            <TopNav />
            <Container fluid className="p-0 m-0 login-page">
                <Row>
                    <Col lg={{span: 6, offset: 1}} className="mt-5">
                        <Image fluid src={LoginWelcome} />
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Card style={{ width: '35rem', height: '40rem' }} className="bg-dark mt-5">
                            <Card.Body>
                                <Card.Title className="my-4 ">
                                    <h1>Sign In</h1>
                                </Card.Title>
                                <Card.Text>
                                    <Form>
                                        <Form.Group className="mb-3 mx-5" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group className="mb-3 mx-5" controlId="formBasicPassword">
                                            <Form.Control type="password" placeholder="Password" />
                                            <Form.Text><Link to="/forgotpassword" className="text-success">Forgot Passsword?</Link></Form.Text>
                                        </Form.Group>
                                        <Button className="btn-secondary mt-4 px-5 py-2" type="submit">
                                            Login
                                        </Button>
                                        <Form.Group className="mt-4">
                                            <Form.Text>
                                                Don't have an account?
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Text>
                                                <Link to="/register" className="text-success">Register to start sharing your groove!</Link>
                                        </Form.Text>
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LoginPage;
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import { Image } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from "react-router-dom";

const LoginCard = () => {
    return (
        <Card style={{ width: '35rem', height: '40rem' }} className="bg-dark mt-5 pt-4">
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
                        <Button className="btn-secondary mt-2 px-5 py-2" type="submit">
                            Login
                        </Button>
                    </Form>
                    <Container className="mt-5">
                        <h1>New Here?</h1>
                        <p>Let's get you set up to start sharing your groove!</p>
                        <Button className="btn-secondary px-5 py-2" type="submit">
                            <Link to="/register" className="text-decoration-none text-light">
                                Register
                            </Link>
                        </Button>
                    </Container>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default LoginCard;
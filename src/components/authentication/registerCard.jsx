import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import { Image } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from "react-router-dom";

const RegisterCard = () => {
    return (
        <Card style={{ width: '35rem', height: '40rem' }} className="bg-dark mt-5 pt-4">
            <Card.Body>
                <Card.Title className="mt-2 mb-4 ">
                    <h1>Create an account</h1>
                </Card.Title>
                <Card.Text>
                    <Form>
                        <Form.Group className="mb-4 mx-5" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-4 mx-5" controlId="formBasicUser">
                            <Form.Control type="email" placeholder="Create Username" />
                        </Form.Group>
                        <Form.Group className="mb-4 mx-5" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Create Password" />
                        </Form.Group>
                        <Form.Group className="mb-4 mx-5" controlId="formBasicPassword2">
                            <Form.Control type="password" placeholder="Re-Enter Password" />
                        </Form.Group>
                        <Button className="btn-secondary mt-2 px-5 py-2" type="submit">
                            Create Account
                        </Button>
                    </Form>
                    <Container className="mt-5">
                        <h3 className='text-light'>Already have an account?</h3>
                        <p>Login to continue sharing your groove!</p>
                        <Button className="btn-secondary px-5 py-2" type="submit">
                            <Link to="/login" className="text-decoration-none text-light">
                                Login
                            </Link>
                        </Button>
                    </Container>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default RegisterCard;
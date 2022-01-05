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
import LoginCard from './authentication/logincard'

const LoginPage = () => {
    return (
        <>
            <TopNav />
            <Container fluid className="p-0 m-0 login-page">
                <Row>
                    <Col lg={{span: 6, offset: 1}} className="mt-3">
                        <Image fluid src={LoginWelcome} />
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <LoginCard />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default LoginPage;
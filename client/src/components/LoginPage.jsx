import TopNav from "./navigation/TopNav";
import Footer from "./navigation/Footer";
import Container from 'react-bootstrap/Container'
import './auth/login.css'
import { Row, Col } from 'react-bootstrap'
import { Image } from "react-bootstrap";
import LoginWelcome from '../assets/images/login_welcome-02.png'
import LoginCard from "./auth/LoginCard ";

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
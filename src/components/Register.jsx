import TopNav from "./navigation/TopNav";
import Footer from "./navigation/Footer";
import Container from 'react-bootstrap/Container'
import './auth/login.css'
import { Row, Col } from 'react-bootstrap'
import { Image } from "react-bootstrap";
import RegisterWelcome from '../assets/images/register_welcome-03.png'
import RegisterCard from "./auth/registerCard";

const RegisterPage = () => {
    return (
        <>
            <TopNav />
            <Container fluid className="p-0 m-0 login-page">
                <Row>
                    <Col lg={{span: 6, offset: 1}} className="mt-5 pt-5">
                        <Image fluid src={RegisterWelcome} />
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <RegisterCard />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RegisterPage;
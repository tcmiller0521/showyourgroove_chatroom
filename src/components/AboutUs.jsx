import './aboutPage/aboutpage.css'
import AboutHeader from '../components/aboutPage/AboutHeader';
import cardPlaceholder from '../assets/images/showyourgroove-logo.png';
import { Card, CardGroup } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import TopNav from './navigation/TopNav';
import Footer from './navigation/Footer';

const AboutUs = () => {
    return (
        <body className='aboutbody'>
            <TopNav />
            <div>
                <AboutHeader />
            </div>
            <div>
                <Container className='aboutunderlining'>
                    <Row>
                        <h1>WHY SHARE YOUR GROOVE?</h1>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col lg="6" md="9" sm="10" className="aboutpink-line mb-4"></Col>
                    </Row>
                </Container>
            </div>
            <br />
            <Container fluid className='aboutconstrain'>
                <h1>
                    Show Your Groove was made as a familiar chat app for everyone's common interest! From pre-made rooms to your very own, explore every music genre under the sun and meet with similar-minded folk anytime, anywhere.
                </h1>
            </Container>
            <br />
            <div>
                <Container className='aboutunderlining'>
                    <Row>
                        <h1>ABOUT THE DEVS</h1>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col lg="4" md="6" sm="7" className="aboutpink-line mb-4"></Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container fluid className='aboutconstrain'>
                    <CardGroup className='text-light mb-5'>
                        <Card className='aboutCards'>
                            <Card.Img variant="top" src={cardPlaceholder} />
                            <Card.Body className='AnthonyCard'>
                                <Card.Title className="AnthonyOutline aboutcenternames"><h1>ANTHONY GIRONE</h1></Card.Title>
                                <Card.Text className="AnthonyOutline">
                                    <h1>A 20 year old college student with a love for music and a project to create, Show Your Groove is a perfect mix of work and play.</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='aboutCards'>
                            <Card.Img variant="top" src={cardPlaceholder} />
                            <Card.Body className='TrevorCard'>
                                <Card.Title className="TrevorOutline aboutcenternames"><h1>TREVOR LITTLE</h1></Card.Title>
                                <Card.Text className="TrevorOutline">
                                    <h1>Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='aboutCards'>
                            <Card.Img variant="top" src={cardPlaceholder} />
                            <Card.Body className='TaylorCard'>
                                <Card.Title className='TaylorOutline aboutcenternames'><h1>TAYLOR MILLER</h1></Card.Title>
                                <Card.Text className='TaylorOutline'>
                                    <h1>Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
            <Footer />
        </body>
    )
}

export default AboutUs;
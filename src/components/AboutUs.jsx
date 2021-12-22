import '../assets/style/aboutpage.css';
import background from '../assets/images/showyourgroove-header';
import cardPlaceholder from '../assets/images/showyourgroove-logo.png';
import { Card, CardGroup } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar';

const AboutUs = () => {
    return (
        <body className='body'>
            <Navbar />
            <div>
                <img src={background} className='backgroundPic' alt='' />
            </div>
            <div>
                <Container className='underlining'>
                    <Row>
                        <h1>WHY SHARE YOUR GROOVE?</h1>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col lg="6" md="9" sm="10" className="pink-line mb-4"></Col>
                    </Row>
                </Container>
            </div>
            <br />
            <Container fluid className='constrain'>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat fringilla mauris, condimentum tincidunt felis fringilla non.
                    Aliquam vitae est mollis tortor fermentum maximus vitae at risus. In egestas velit et consequat maximus. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla congue, neque sodales sollicitudin faucibus, nulla
                    arcu ultrices diam, sed faucibus felis enim ac neque. Nunc laoreet porta gravida. Vestibulum consectetur, est ac fringilla rhoncus,
                    tellus enim aliquet quam, sed scelerisque est nisl a ligula. Vestibulum dapibus nisi ligula. Phasellus suscipit justo arcu, ut pretium
                    lacus rhoncus id. Praesent imperdiet dictum orci quis mattis. Nullam sit amet ultrices nisl, a laoreet leo. Nullam at velit at orci
                    rutrum tempor in in ipsum. Quisque aliquam justo at lorem accumsan, ut vulputate lectus pretium. Curabitur at lacinia purus,
                    mollis ullamcorper mauris. Suspendisse enim nibh, auctor id magna sit amet, malesuada imperdiet erat. In hac habitasse platea dictumst. Sed nisl neque, ultricies a dui a, efficitur ornare mi. Ut accumsan augue id magna auctor rhoncus.
                    Quisque luctus non velit id elementum. Nulla et imperdiet tortor. Etiam suscipit posuere maximus. Suspendisse convallis erat vel nisl venenatis condimentum.</h1>
            </Container>
            <br />
            <div>
                <Container className='underlining'>
                    <Row>
                        <h1>ABOUT THE DEVS</h1>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col lg="4" md="6" sm="7" className="pink-line mb-4"></Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container fluid className='constrain'>
                    <CardGroup className='text-light'>
                        <Card className='Cards'>
                            <Card.Img variant="top" src={cardPlaceholder} />
                            <Card.Body className='AnthonyCard'>
                                <Card.Title>Anthony Girone</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='Cards'>
                            <Card.Img variant="top" src={cardPlaceholder} />
                            <Card.Body className='TrevorCard'>
                                <Card.Title>Trevor Little</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='Cards'>
                            <Card.Img variant="top" src={cardPlaceholder} />
                            <Card.Body className='TaylorCard'>
                                <Card.Title>Taylor Miller</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
            <div className='App '>
                <footer className='footer content-wrap'>
                    <Navbar />
                </footer>
            </div>
        </body>
    )
}

export default AboutUs;
import './aboutPage/aboutpage.css'
import background from '../assets/images/showyourgroove-header';
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
                <img src={background} className='aboutbackgroundPic' alt='' />
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
                <h1>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. MORBI PLACERAT FRINGILLA MAURIS, CONDIMENTUM TINCIDUNT FELIS FRINGILLA NON. 

ALIQUAM VITAE EST MOLLIS TORTOR FERMENTUM MAXIMUS VITAE AT RISUS. IN EGESTAS VELIT ET CONSEQUAT MAXIMUS. PELLENTESQUE HABITANT 

MORBI TRISTIQUE SENECTUS ET NETUS ET MALESUADA FAMES AC TURPIS EGESTAS. NULLA CONGUE, NEQUE SODALES SOLLICITUDIN FAUCIBUS, NULLA 

ARCU ULTRICES DIAM, SED FAUCIBUS FELIS ENIM AC NEQUE. NUNC LAOREET PORTA GRAVIDA. VESTIBULUM CONSECTETUR, EST AC FRINGILLA RHONCUS, 

TELLUS ENIM ALIQUET QUAM, SED SCELERISQUE EST NISL A LIGULA. VESTIBULUM DAPIBUS NISI LIGULA. PHASELLUS SUSCIPIT JUSTO ARCU, UT PRETIUM 

LACUS RHONCUS ID. PRAESENT IMPERDIET DICTUM ORCI QUIS MATTIS. NULLAM SIT AMET ULTRICES NISL, A LAOREET LEO. NULLAM AT VELIT AT ORCI 

RUTRUM TEMPOR IN IN IPSUM. QUISQUE ALIQUAM JUSTO AT LOREM ACCUMSAN, UT VULPUTATE LECTUS PRETIUM. CURABITUR AT LACINIA PURUS, 

MOLLIS ULLAMCORPER MAURIS. SUSPENDISSE ENIM NIBH, AUCTOR ID MAGNA SIT AMET, MALESUADA IMPERDIET ERAT. IN HAC HABITASSE PLATEA DICTUMST. SED NISL NEQUE, ULTRICIES A DUI A, EFFICITUR ORNARE MI. UT ACCUMSAN AUGUE ID MAGNA AUCTOR RHONCUS. 

QUISQUE LUCTUS NON VELIT ID ELEMENTUM. NULLA ET IMPERDIET TORTOR. ETIAM SUSCIPIT POSUERE MAXIMUS. SUSPENDISSE CONVALLIS ERAT VEL NISL VENENATIS CONDIMENTUM. 

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
                                   <h1> Some quick example text to build on the card title and make up the bulk of
                                    the card's content. </h1>
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
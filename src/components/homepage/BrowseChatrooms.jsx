import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import CardImage from '../../assets/images/card_background-01.png'
import { Row, Col } from 'react-bootstrap'

const BrowseChatRooms = () => {
    return (
        <>
            <Container>
                <Row>
                    <h1>Browse Popular Chatrooms</h1>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col lg="6" md="10" sm="10" className="pink-line mb-4"></Col>
                </Row>
            </Container>
            <Container fluid className="containers d-flex justify-content-center mb-5">
                <Row className="containers d-flex justify-content-center">
                    <Col lg="2" className="my-2 me-4">
                        <Card style={{ width: '18rem' }} className="bg-primary m-3">
                            <Card.Img variant="top" src={CardImage} />
                            <Card.Body>
                                <Card.Title className="pt-2 card-border"><h3>Rock</h3></Card.Title>
                                <Card.Text className="card-border pt-3">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt faucibus tincidunt. Sed turpis nisl, finibus ut odio non, pretium eleifend enim.
                                    </p>
                                    <Button className="btn-dark mb-3">Join Room</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="2" className="my-2 me-4">
                        <Card style={{ width: '18rem' }} className="bg-primary m-3">
                            <Card.Img variant="top" src={CardImage} />
                            <Card.Body>
                                <Card.Title className="pt-2 card-border"><h3>Classical</h3></Card.Title>
                                <Card.Text className="card-border pt-3">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt faucibus tincidunt. Sed turpis nisl, finibus ut odio non, pretium eleifend enim.
                                    </p>
                                    <Button className="btn-dark mb-3">Join Room</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="2" className="my-2 me-4">
                        <Card style={{ width: '18rem' }} className="bg-primary m-3">
                            <Card.Img variant="top" src={CardImage} />
                            <Card.Body>
                                <Card.Title className="pt-2 card-border"><h3>Hip Hop</h3></Card.Title>
                                <Card.Text className="card-border pt-3">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt faucibus tincidunt. Sed turpis nisl, finibus ut odio non, pretium eleifend enim.
                                    </p>
                                    <Button className="btn-dark mb-3">Join Room</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="2" className="my-2 me-4">
                        <Card style={{ width: '18rem' }} className="bg-primary m-3">
                            <Card.Img variant="top" src={CardImage} />
                            <Card.Body>
                                <Card.Title className="pt-2 card-border"><h3>Pop</h3></Card.Title>
                                <Card.Text className="card-border pt-3">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt faucibus tincidunt. Sed turpis nisl, finibus ut odio non, pretium eleifend enim.
                                    </p>
                                    <Button className="btn-dark mb-3">Join Room</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="2" className="my-2 me-5">
                        <Card style={{ width: '18rem' }} className="bg-primary m-3">
                            <Card.Img variant="top" src={CardImage} />
                            <Card.Body>
                                <Card.Title className="pt-2 card-border"><h3>Indie</h3></Card.Title>
                                <Card.Text className="card-border pt-3">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt faucibus tincidunt. Sed turpis nisl, finibus ut odio non, pretium eleifend enim.
                                    </p>
                                    <Button className="btn-dark mb-3">Join Room</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BrowseChatRooms;
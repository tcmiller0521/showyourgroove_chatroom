import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectContent } from '../../state/contentSlice'

import { Link } from 'react-router-dom'


const BrowseChatRooms = () => {

    const content = useSelector(selectContent)

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
                    {content.map((RoomInfo, i) => (
                        <Col key={i} lg="2" className="my-2 me-5">
                            <Card style={{ width: '18rem' }} className="bg-primary m-3">
                                <Card.Img variant="top" src={RoomInfo.image} />
                                <Card.Body>
                                    <Card.Title className="pt-2 card-border"><h3>{RoomInfo.title}</h3></Card.Title>
                                    <Card.Text className="card-border pt-3 text-dark">
                                            {RoomInfo.description}
                                        <Button className="btn-dark mb-3"><Link to={`/firstchatroom/${i}`}>Join Room</Link></Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default BrowseChatRooms;
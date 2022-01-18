import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import userAvatar from '../../assets/images/user-avatar.png'

const UserCard = () => {
    return (
        <>
            <Row>
                <Col lg={{span: 10, offset: 2}} className="mt-5 pt-5">
                    <Card className="bg-primary">
                        <Card.Img variant="top" className="avatar-img" />
                        <Card.Body>
                            <Card.Title>
                                <h2>Username1234</h2>
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default UserCard;
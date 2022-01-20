import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'
import userAvatar from '../../assets/images/user-avatar.png'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../state/authSlice'

const UserCard = () => {

    const userInfo = useSelector(selectAuth)

    return (
        <>
            <Row>
                <Col lg={{ span: 10, offset: 2 }} className="mt-5 pt-5">
                    <Card style={{backgroundColor: `${userInfo.color}` }}>
                        <Card.Img variant="top" className="avatar-img" />
                        <Card.Body>
                            <Card.Title>
                                <h2>{userInfo.username}</h2>
                            </Card.Title>
                        
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>About me</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
            
                            <Button className="btn-secondary mt-2 px-5 py-2" type="submit">
                                Save Changes
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default UserCard;
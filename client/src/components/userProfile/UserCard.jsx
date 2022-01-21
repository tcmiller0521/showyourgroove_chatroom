import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'
import userAvatar from '../../assets/images/user-avatar.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../../state/userSlice'


const UserCard = () => {

    const profileInfo = useSelector(selectUser)

    return (
        <>
            <Row>
                <Col lg={{ span: 10, offset: 2 }} className="mt-5 pt-5">
                    <Card style={{backgroundColor: `${profileInfo.result.color}` }}>
                        <Card.Img variant="top" src={profileInfo.result.selectedFile} />
                        <Card.Body>
                            <Card.Title>
                                <h2>{profileInfo.result.username}</h2>
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
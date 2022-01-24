import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectUser } from '../../state/userSlice'
import { useState } from 'react'
import DefaultAvatar from '../../assets/images/DefaultAvatar.png';


const UserCard = () => {

    const user = JSON.parse(localStorage.getItem('profile'))
    const profileInfo = useSelector(selectUser)
    const [currentId, setCurrentId] = useState(profileInfo.result._id);

    const hasColor = (profileInfo.result.color)


    return (
        <>
            <Row>
                <Col lg={{ span: 10, offset: 2 }} className="mt-5 pt-5">
                    {(!user.result.selectedFile) && (
                         <Card style={hasColor ? {backgroundColor: `${profileInfo.result.color}`} : {backgroundColor: "#098EC3" }}>
                         <Card.Img variant="top" src={profileInfo.result.selectedFile ? profileInfo.result.selectedFile : DefaultAvatar} />
                         <Card.Body>
                             <Card.Title>
                                 <h2>{profileInfo.result.username}</h2>
                             </Card.Title>
                         </Card.Body>
                     </Card>
                    )};

                    {(user?.result.selectedFile) && (
                        <Card style={{backgroundColor: `${profileInfo.result.color}` }}>
                        <Card.Img variant="top" src={profileInfo.result.selectedFile ? profileInfo.result.selectedFile : '/client/src/assets/images/Taylor_Avatar.png'} />
                        <Card.Body>
                            <Card.Title>
                                <h2>{profileInfo.result.username}</h2>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    )}
                </Col>
            </Row>
        </>
    )
}

export default UserCard;
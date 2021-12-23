import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

import ChatRoom from './ChatRoom'
import Rooms from '../rooms/Rooms'
import Social from '../rooms/Social'
// css import
import '../../chatrooms/chatroom.css'
import Background from '../../../assets/images/Background2.jpg'


const FirstChatroom = () => {
    return (
        <Container className="wrapper bg-image" fluid>
            {/* <Image fluid src={Background}></Image> */}
            <Row className="test">
                <Col xs="2">
                    <Rooms />
                </Col>
                <Col xs="2">
                    <Social />
                </Col>
                <Col xs="5">
                    <ChatRoom />
                </Col>
                
            </Row>
            
        </Container>
    )
}

export default FirstChatroom;
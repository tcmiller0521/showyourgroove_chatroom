import React, { useState } from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

import ChatNav from '../ChatNav'
import ChatRoom from './ChatRoom'
import Rooms from '../rooms/Rooms'
import Social from '../rooms/Social'
import Private from '../rooms/Private'
import Online from '../rooms/Online'
// css import
import '../../chatrooms/chatroom.css'
import Background from '../../../assets/images/Background2.jpg'


// const FirstChatroom = () => {
const FirstChatroom = () => {

    const [rooms, setRooms] = useState(true)
    const [priv, setPriv] = useState(true)
    const [social, setSocial] = useState(true)
    const [online, setOnline] = useState(true)


    

        // const buttonText = this.state.visible ? 'hide' : 'show';

        return (
            <>
            
            <Container className="wrapper bg-image" fluid>
                {/* <Image fluid src={Background}></Image> */}
                <Row className="test">
                    
                    <Container className="room">
                        <Col className='chatNav'>
                            <ChatNav setRooms = {setRooms} setPriv = {setPriv} setSocial = {setSocial} setOnline = {setOnline}/>
                        </Col>

                        
                        <Col xs="2">
                            {rooms ? <Rooms setRooms = {setRooms}/> : null}
                            
                            {priv ? <Private setPriv = {setPriv}/> : null}
                            
                        </Col>
                        <Col xs="2">
                            {social ? <Social setSocial = {setSocial}/> : null}
                            
                            {online ? <Online setOnline = {setOnline}/> : null}
                            
                        </Col>
                        
                        <Col xs="5">
                            <ChatRoom />
                        </Col>
                    </Container>
                </Row>
                
            </Container>
            </>
        )
    
}

export default FirstChatroom;
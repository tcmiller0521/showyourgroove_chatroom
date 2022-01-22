import React, { useState } from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'

import { useParams } from 'react-router'
import RoomsInfo from '../../../assets/contentFiles/Rooms'

import ChatNav from '../../navigation/ChatNav'
import ChatRoom from './ChatRoom'
import Rooms from '../rooms/Rooms'
import Social from '../rooms/Social'
import Private from '../../rooms/Private'
import Online from '../../rooms/Online'
// css import
import '../chatroom.css'
// import Background from '../../../assets/images/Background2.jpg'


// const FirstChatroom = () => {
const FirstChatroom = ({ currentId, setCurrentId }) => {

    const [rooms, setRooms] = useState(true)
    const [priv, setPriv] = useState(true)
    const [social, setSocial] = useState(true)
    const [online, setOnline] = useState(true)

    const {index} = useParams();
    console.log(useParams());


    

        // const buttonText = this.state.visible ? 'hide' : 'show';

        return (
            <>
            {/* {`${RoomsInfo[index].link}bg-image`} dont need wrapper {{define RoomsInfo}}*/}
            <Container className={`${RoomsInfo[index].link}bg-image`}  fluid>
                {/* <Image fluid src={Background}></Image> */}
                <Row className="test">
                    
                    <Container className="room">
                        <Col className='chatNav'>
                            <ChatNav setRooms = {setRooms} setPriv = {setPriv} setSocial = {setSocial} setOnline = {setOnline}/>
                        </Col>

                        
                        <Col className="public_rooms" xs="2">
                            {rooms ? <Rooms setRooms = {setRooms}/> : null}
                            
                            {priv ? <Private setPriv = {setPriv}/> : null}
                            
                        </Col>
                        <Col className="friends" xs="2">
                            {social ? <Social setSocial = {setSocial}/> : null}
                            
                            {online ? <Online setOnline = {setOnline}/> : null}
                            
                        </Col>
                        
                        <Col xs="8">
                            
                                <Route path='/firstchatroom/:index'>
                                    <ChatRoom setCurrentId={setCurrentId} currentId={currentId} />
                                </Route>
                        
                        </Col>
                    </Container>
                </Row>
                
            </Container>
            </>
        )
    
}

export default FirstChatroom;
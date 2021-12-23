import React from 'react'
import {
    Row, 
    Col, 
    Container, 
    Form,
    Button,
    Stack 
} from 'react-bootstrap'

import Rooms from '../rooms/Rooms'

function ChatRoom() {
    return (
        <div>
            {/* <Rooms /> */}
            <Container className="mainChat">
                {/* Chatroom Header */}
                <Row className='chatHead'>
                    <Col>
                        {/* Chatroom title */}
                        <h1>This is the chatroom</h1> 
                    </Col>
                </Row>
                <Row className='chatBody'>
                    {/* Chatroom Feed */}
                    <Col xs="9" className='chatFeed'></Col> 
                    {/* Chatroom Population (current users populating room) */}
                    <Col xs="2"className='chatPop'></Col>
                </Row>
                <Row>
                    {/* Chatroom Input */}
                    {/* <Col xs='auto'> */}
                        <Stack direction="horizontal" gap={3}>
                            <Form.Control className="me-auto" placeholder="What's your Groove?" />
                            <Button variant="secondary">POST</Button>
                        </Stack>
                    {/* </Col> */}
                </Row>
            </Container>
            
            
        </div>
    )
}

export default ChatRoom

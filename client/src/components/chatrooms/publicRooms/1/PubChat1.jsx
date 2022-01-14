import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const PubChat1 = () => {
    return (
        <div>
            <Container>
                {/* Chatroom Header */}
                <Row className='chatHead'>
                    <Col>
                        <h1>This is the chatroom</h1>
                    </Col>
                </Row>
                <Row className='chatBody'>
                    {/* Chatroom Feed */}
                    <Col className='chatFeed'></Col> 
                    {/* Chatroom Population (current users populating room) */}
                    <Col className='chatPop'></Col>
                </Row>
                <Row>
                    {/* Chatroom Input */}
                    <Col className='chatInput'></Col>
                </Row>
            </Container>
        </div>
    )
}

export default PubChat1

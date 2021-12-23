import React from 'react'
import {
    Row, 
    Col, 
    Container, 
    Form,
    Button 
} from 'react-bootstrap'



function Rooms() {
    return (
        <div>
            <Container className='rooms'>
                {/* Chatroom Header */}
                <Row className='roomsHead'>
                    <Col>
                        <h1>PUBLIC</h1>
                    </Col>
                </Row>
                <Row className='roomsContainer'>
                    {/* Public rooms list */}
                    <Col className='pubNav'></Col> 
                </Row>
                <Row className='roomsHead'>
                    <Col>
                        <h1>PRIVATE</h1>
                    </Col>
                </Row>
                <Row className='roomsContainer'>
                    {/* Public rooms list */}
                    <Col className='privateNav'></Col> 
                </Row>
            </Container>
        </div>
    )
}

export default Rooms

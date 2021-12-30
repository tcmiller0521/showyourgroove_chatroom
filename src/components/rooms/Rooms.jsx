import React from 'react'
import {
    Row, 
    Col, 
    Container, 
    Form,
    Button 
} from 'react-bootstrap'



function Rooms({setRooms}) {

    return (
        <div>
            
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
                <button
                    onClick={() => {
                        setRooms(false);
                    }}>
                        XX
                </button>
            
        </div>
    )
}

export default Rooms

import React, {useState} from 'react'
import {
    Row, 
    Col, 
    Container, 
    Form,
    Button 
} from 'react-bootstrap'

function Social({setSocial}) {
    
    return (
        <div>
            
                {/* Chatroom Header */}
                <Row className='roomsHead'>
                    <Col>
                        <h1>Friends</h1>
                    </Col>
                </Row>
                <Row className='roomsContainer'>
                    {/* Public rooms list */}
                    <Col className='pubNav'></Col> 
                </Row>
                <button 
                    onClick= {() => {
                        
                        setSocial(false);
                    }}>
                        X
                </button>
            
        </div>
    )
}

export default Social

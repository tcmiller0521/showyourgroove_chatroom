import React from 'react'
import {
    Row, 
    Col, 
    Container, 
    Form,
    Button 
} from 'react-bootstrap'

function Online({setOnline}) {
    return (
        <div>
            
                <Row className='roomsHead'>
                    <Col>
                        <h1>Online</h1>
                    </Col>
                </Row>
                <Row className='roomsContainer'>
                    {/* Public rooms list */}
                    <Col className='privateNav'></Col> 
                </Row>
                <button
                    onClick={() => {
                        setOnline(false);
                    }}>
                        XXXX
                </button>
        </div>
    )
}

export default Online

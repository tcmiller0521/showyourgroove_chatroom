import React from 'react'
import {
    Row, 
    Col, 
    Container, 
    Form,
    Button 
} from 'react-bootstrap'



function Private({setPriv}) {
    return (
        <div>
            
                
                <Row className='roomsHead'>
                    <Col>
                        <h1>PRIVATE</h1>
                    </Col>
                </Row>
                <Row className='roomsContainer'>
                    {/* Public rooms list */}
                    <Col className='privateNav'></Col> 
                </Row>
                <button
                    onClick={() => {
                        setPriv(false);
                    }}>
                        XXX
                </button>
        </div>
    )
}

export default Private

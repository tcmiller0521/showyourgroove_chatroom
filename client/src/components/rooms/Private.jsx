import React from 'react'
import { useParams } from 'react-router-dom';
import RoomsInfo from '../../assets/contentFiles/Rooms';

import {
    Row, 
    Col, 
    Container, 
    Form,
    Button 
} from 'react-bootstrap'



function Private({setPriv}) {
    const { index } = useParams();
    console.log(index);
    return (
        <div>
            
                
                <Row className={`${RoomsInfo[index].link}roomsHead`}>
                    <Col>
                        <h1>PRIVATE</h1>
                    </Col>
                </Row>
                <Row className={`${RoomsInfo[index].link}roomsContainer`}>
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

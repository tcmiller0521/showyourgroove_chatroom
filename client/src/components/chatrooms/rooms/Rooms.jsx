import React from 'react'
import { useParams } from 'react-router-dom';
import RoomsInfo from '../../../assets/contentFiles/Rooms';

import {
    Row, 
    Col, 
    Container, 
    Form,
    Button 
} from 'react-bootstrap'



function Rooms({setRooms}) {
    const {index} = useParams();
    console.log(index)

    return (
        <div>
            
                {/* Chatroom Header */}
                <Row className={`${RoomsInfo[index].link}roomsHead`}>
                    <Col>
                        <h1>PUBLIC</h1>
                    </Col>
                </Row>
                <Row className={`${RoomsInfo[index].link}roomsContainer`}>
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

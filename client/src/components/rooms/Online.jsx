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

function Online({setOnline}) {
    const {index} = useParams();
    console.log(index)
    return (
        <div>
            
                <Row className={`${RoomsInfo[index].link}roomsHead`}>
                    <Col>
                        <h1>Online</h1>
                    </Col>
                </Row>
                <Row className={`${RoomsInfo[index].link}roomsContainer`}>
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

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

function Social({setSocial}) {
    const {index} = useParams();
    console.log(index);
    return (
        <div>
            
                {/* Chatroom Header */}
                <Row>
                    <Col className={`${RoomsInfo[index].link}roomsHead`}>
                        <h1>Friends</h1>
                        <button className="btnHide" 
                            onClick= {() => {
                                
                                setSocial(false);
                            }}>
                                ||||
                        </button>
                    </Col>
                </Row>
                <Row className={`${RoomsInfo[index].link}roomsContainer`}>
                    {/* Public rooms list */}
                    <Col className='pubNav'></Col> 
                </Row>
                
            
        </div>
    )
}

export default Social

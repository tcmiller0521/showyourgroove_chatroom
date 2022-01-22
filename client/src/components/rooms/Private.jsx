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
            
                
                <Row>
                    <Col className={`${RoomsInfo[index].link}roomsHead`}>
                        <h1>PRIVATE</h1>
                        <button className="btnHide"
                            onClick={() => {
                                setPriv(false);
                            }}>
                                ||||
                        </button>
                    </Col>
                </Row>
                <Row className={`${RoomsInfo[index].link}roomsContainer`}>
                    {/* Public rooms list */}
                    <Col className='privateNav'></Col> 
                </Row>
                
        </div>
    )
}

export default Private

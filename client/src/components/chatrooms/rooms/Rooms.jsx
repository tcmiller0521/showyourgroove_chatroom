import React from 'react'
import { useParams, Link } from 'react-router-dom';
import RoomsInfo from '../../../assets/contentFiles/Rooms';
import { useSelector } from 'react-redux';
import { selectContent } from '../../../state/contentSlice';
import {
    Row, 
    Col, 
    Container, 
    Form,
    Button 
} from 'react-bootstrap'
import RoomInfo from '../../../assets/contentFiles/Rooms';



function Rooms({setRooms}) {
    const {index} = useParams();
    const content = useSelector(selectContent);
    console.log(index)

    return (
        <div>
            
                {/* Chatroom Header */}
                <Row className={`${RoomsInfo[index].link}roomsHead`}>
                    <Col>
                        <h1>PUBLIC</h1>
                        <button
                            onClick={() => {
                                setRooms(false);
                            }}>
                                x
                        </button>
                    </Col>
                </Row>
                <Row className={`${RoomsInfo[index].link}roomsContainer`}>
                    {/* Public rooms list */}
                    
                        <Col className='pubNav'>
                        {content.map((RoomsInfo, i) => (
                            <button className='roomList' key={i}>
                                <Link to={`/firstchatroom/${i}`}>{RoomsInfo.title}</Link>
                            </button>
                        ))}    
                        </Col> 
                    
                </Row>
                
            
        </div>
    )
}

export default Rooms

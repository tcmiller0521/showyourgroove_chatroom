import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import RoomsInfo from '../../../assets/contentFiles/Rooms';
import { useSelector } from 'react-redux';
import { selectContent } from '../../../state/contentSlice';
import {
    Row, 
    Col, 
} from 'react-bootstrap'



function Rooms({setRooms}) {
    const {index} = useParams();
    const content = useSelector(selectContent);
    console.log(index)

    return (
        <>
            
                {/* Chatroom lists */}
                <Row>
                    <Col className={`${RoomsInfo[index].link}roomsHead`}>
                        <h1>PUBLIC</h1>
                        <button className="btnHide"
                            onClick={() => {
                                setRooms(false);
                            }}>
                                ||||
                        </button>
                    </Col>
                </Row>
                <Row className={`${RoomsInfo[index].link}roomsContainer`}>
                    {/* Public rooms list */}
                    
                        <Col className='pubNav'>
                        {content.map((RoomsInfo, i) => (
                                // {`${RoomsInfo[index].link}roomList`}
                            <button className="roomList" key={i}>
                                <Link to={`/firstchatroom/${i}`}> {RoomsInfo.title} </Link>
                            </button>
                        ))}    
                        </Col> 
                    
                </Row>
                
            
        </>
    )
}

export default Rooms

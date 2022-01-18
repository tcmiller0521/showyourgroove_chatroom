import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom'
import userChatRooms from "../../assets/contentFiles/userChatrooms";

const CustomChatrooms = () => {

    const [ChatInfo] = useState(userChatRooms);

    return (
        <>
            <div class="row">
                <div className="d-flex flex-column align-items-center">
                    <h1>Custom Chatrooms</h1>
                    <div className="pubrooms-divider mb-4" />
                </div>
                <div class="col-md-12">
                    <div
                        data-mdb-spy="scroll"
                        data-mdb-target="#scrollspy1"
                        data-mdb-offset="0"
                        className="scrollspy-example"
                    >
                        {ChatInfo.map((userChatRooms, i) => (
                            <section id="example-1">
                                <Row>
                                    <Col>
                                        <h2>{userChatRooms.chatroom}</h2>
                                    </Col>
                                    <Col>
                                        <Link to={userChatRooms.link}>
                                            <Button className="btn-secondary mb-3">
                                                Join Room
                                            </Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomChatrooms;
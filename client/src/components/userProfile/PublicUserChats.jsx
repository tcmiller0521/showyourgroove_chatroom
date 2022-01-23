import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom'
import userChatRooms from "../../assets/contentFiles/userChatrooms";

const PublicUserChats = () => {

    const [ChatInfo] = useState(userChatRooms);

    return (
        <>
            <div className="row mb-5">
                <div className="d-flex flex-column align-items-center">
                    <h1>Public Chatrooms</h1>
                    <div className="pubrooms-divider mb-4" />
                </div>
                <div className="col-md-12">
                    <div
                        data-mdb-spy="scroll"
                        data-mdb-target="#scrollspy1"
                        data-mdb-offset="0"
                        className="scrollspy-example"
                    >
                        {ChatInfo.map((userChatRooms, i) => (
                            <section key={i} id="example-1">
                                <Row>
                                    <Col lg={6}>
                                        <h2>{userChatRooms.chatroom}</h2>
                                    </Col>
                                    <Col lg={2}>
                                        <Link to={userChatRooms.link}>
                                            <Button className="btn-secondary mb-3">
                                                Join Room
                                            </Button>
                                        </Link>
                                    </Col>
                                    <Col lg={2}>
                                        <Button className="btn-secondary">Delete</Button>
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

export default PublicUserChats;
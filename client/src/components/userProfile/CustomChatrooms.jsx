import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom'
import userChatRooms from "../../assets/contentFiles/userChatrooms";

const CustomChatrooms = () => {

    const [ChatInfo] = useState(userChatRooms);

    return (
        <>
            <div className="row">
                <div className="d-flex flex-column align-items-center">
                    <h1>Custom Chatrooms</h1>
                    <div className="pubrooms-divider mb-4" />
                </div>
                <div className="col-md-12">
                    <div
                        data-mdb-spy="scroll"
                        data-mdb-target="#scrollspy1"
                        data-mdb-offset="0"
                        className="scrollspy-example"
                    >
                        <section id="example-1">
                                <h2>Coming Soon</h2>
                            </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomChatrooms;
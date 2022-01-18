import { Container, Row, Col, Tab, Tabs } from "react-bootstrap"
import './ProfilePage.css';
import { useState } from "react";
import UserChats from "./UserChats";

const ProfileRouter = () => {

    const [key, setKey] = useState('home');

    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg={{span: 10,}}>
                        <Tabs
                            id="controlled-tab-example"
                            defaultActiveKey="chats"
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                        >
                            <Tab eventKey="chats" title="Chats">
                                <UserChats />
                            </Tab>
                            <Tab eventKey="settings" title="Settings">
                                <h2>page 2</h2>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProfileRouter;
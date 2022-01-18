import { Container, Row, Col, Tab, Tabs } from "react-bootstrap"
import './ProfilePage.css';
import { useState } from "react";
import PublicUserChats from "./PublicUserChats";
import PrivateUserChats from "./PrivateUserChat";
import CustomChatrooms from "./CustomChatrooms";
import UserSettings from "./userSettings";

const ProfileRouter = () => {

    const [key, setKey] = useState('home');

    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg={{span: 10,}}>
                        <Tabs
                            id="controlled-tab-example"
                            defaultActiveKey="chatrooms"
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                        >
                            <Tab eventKey="chatrooms" title="Chatrooms">
                                <PublicUserChats />
                                <PrivateUserChats />
                                <CustomChatrooms />
                            </Tab>
                            <Tab eventKey="settings" title="Settings">
                                <UserSettings />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProfileRouter;
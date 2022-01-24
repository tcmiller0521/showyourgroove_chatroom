import { Container, Row, Col, Tab, Tabs } from "react-bootstrap"
import './ProfilePage.css';
import UserCard from "./UserCard";
import { useState } from "react";
import ProfileRouter from "./ProfileRouter";
import { useSelector } from "react-redux";
import { selectUser } from "../../state/userSlice";
import DefaultBanner from '../../assets/images/user-background.png'

const ProfileBanner = () => {
    
    const profileInfo = useSelector(selectUser)
    const hasBanner = profileInfo.result.selectedFiles

    return (
        <>
            <Container fluid className="m-0 p-0 user-banner" style={hasBanner ? {backgroundImage: `url(${profileInfo.result.selectedFiles})`} : {backgroundImage: `url(${DefaultBanner})` }}>
                <Row>
                    <Col lg={{ span: 4 }}>
                        <UserCard />
                    </Col>
                    <Col lg={{ span: 8 }}>
                        <Container className="d-flex justify-content-start align-items-end user-welcome mb-5">
                            <div className="welcome-text bg-dark d-flex justify-content-center align-items-center px-5">
                                <h1 className="px-4">Welcome Back, {profileInfo.result.username} </h1>
                            </div>
                        </Container>
                        <Container className="pt-5">
                            <ProfileRouter/>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProfileBanner;
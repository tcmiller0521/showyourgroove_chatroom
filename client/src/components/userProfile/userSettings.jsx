import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Card, Button, Form, Container, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { editUser } from "../../actions/auth";
import { selectAuth } from "../../state/authSlice";
import { selectUser } from "../../state/userSlice";
import FileBase from 'react-file-base64';

    

const UserSettings = () => {
    const profileInfo = useSelector(selectUser)
    console.log(profileInfo.result)
    const dispatch = useDispatch();
    const usersInfo = useSelector(selectAuth)
    const [userData, setUserData] = useState(profileInfo.result);
    const [currentId, setCurrentId] = useState(profileInfo.result._id);
    const history = useHistory();
    
    const emptyState = { username: '', password: '', avatar: '', banner: '', color: '' };

    const clear = () => {
        setCurrentId();
        setUserData(emptyState);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(editUser(currentId, userData));
        console.log(userData);
    }


    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })
    }


    return (
        <>
            <Container fluid className="d-flex justify-content-center">
                <Card style={{ width: '35rem', height: '40rem' }} className="bg-dark pt-4">
                    <Card.Body>
                        <Card.Title className=" mb-4 ">
                            <div className="d-flex flex-column align-items-center">
                                <h1>User Info</h1>
                                <div className="pubrooms-divider mb-4" />
                            </div>
                        </Card.Title>
                      
                            <Form>
                                <Form.Group className="mb-4 mx-5" controlId="formBasicUser">
                                    <Form.Control name="username" type="username" placeholder="Change Username" onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group className="mb-4 mx-5" controlId="formBasicPassword">
                                    <Form.Control name="password" type="password" placeholder="Change Password" onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group className="mb-4 mx-5" controlId="formConfirmPassword">
                                    <Form.Control name="confirmPassword" type="updatePassword" placeholder="Confirm Password" onChange={handleChange}/>
                                </Form.Group>

                            
                            <Container className="mt-5">
                                <div className="d-flex flex-column align-items-center">
                                    <h1>User Settings</h1>
                                    <div className="pubrooms-divider mb-4" />
                                </div>
                                <Row>
                                    <Col className="d-flex flex-column align-items-center">
                                        <h3 className="text-light">Favorite Color</h3>
                                        <p>Changes the color of your profile navbar and avatar card.</p>
                                        <>
                                            <Form.Control
                                                type="color"
                                                name="color"
                                                defaultValue={profileInfo.result.color}
                                                title="Choose your color"
                                                className="color-picker"
                                                onChange={handleChange}
                                            />
                                        </>
                                    </Col>
                                    <Col>
                                        <h3 className="text-light">Avatar Settings</h3>
                                        <p>Upload your own picture or customize an avatar!</p>
                                        <Form.Group controlId="formFile" className="mb-3">
                                            <FileBase name="avatar" type="file" multiple={false} onDone={({ base64 }) => setUserData({userData, avatar: base64})} />
                                         
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h3 className="text-light">Profile Banner</h3>
                                        <Form.Group controlId="formFile" className="mb-3">
                                            <Form.Control type="file" name="banner" onChange={handleChange}/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button className="btn-secondary mt-4 px-5 py-2" type="submit" onClick={handleSubmit}>
                                    Save Changes
                                </Button>
                            </Container>
                            </Form>
                    </Card.Body>
                </Card >
            </Container>
        </>
    )
}

export default UserSettings;
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Card, Button, Form, Container, Row, Col } from "react-bootstrap";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { editUser } from "../../actions/auth";
import { selectAuth } from "../../state/authSlice";
import FileBase from 'react-file-base64';


const initialState = { username: '', password: '', confirmPassword: '', color: '', avatar: '', banner: '', };

const UserSettings = () => {
    const dispatch = useDispatch();

    const foundUser = JSON.parse( localStorage.getItem('profile') );
    console.log(foundUser.result._id)
    
    const [currentId, setCurrentId] = useState(foundUser);

    const [formData, setFormData] = useState(initialState);


    const clear = () => {
        setCurrentId();
        setFormData(initialState);
=======
import { editUser, editPassword } from "../../actions/auth";
import { selectUser } from "../../state/userSlice";
import FileBase from 'react-file-base64';



const UserSettings = () => {
    const profileInfo = useSelector(selectUser)
    const dispatch = useDispatch();
    const [userData, setUserData] = useState(profileInfo.result);
    const [currentId, setCurrentId] = useState(profileInfo.result._id);

    const emptyState = { username: '', selectedFile: '', selectedBanner: '', color: '' };
    

    const clear = () => {
        setCurrentId();
        setUserData(emptyState);
>>>>>>> cf61d1d81ac05463af1ac3d5b31c05a061ccb85b
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

<<<<<<< HEAD
        dispatch(editUser(currentId, formData));
        console.log(formData);

        clear();
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
=======
        dispatch(editPassword(currentId, userData));
        dispatch(editUser(currentId, userData));
        console.log(userData);
    }


    const handleChange = (e) => {
        setUserData({
            ...userData,
>>>>>>> cf61d1d81ac05463af1ac3d5b31c05a061ccb85b
            [e.target.name]: e.target.value,
        })
    }

<<<<<<< HEAD
=======
    function refreshPage() {
        window.location.reload();
    }

    const hasColor = (profileInfo.result.color)
>>>>>>> cf61d1d81ac05463af1ac3d5b31c05a061ccb85b


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
<<<<<<< HEAD
                      
                            <Form>
                                <Form.Group className="mb-4 mx-5" controlId="formBasicUser">
                                    <Form.Control name="username" type="updateUsername" placeholder="Change Username" onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group className="mb-4 mx-5" controlId="formBasicPassword">
                                    <Form.Control name="password" type="updatePassword" placeholder="Change Password" onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group className="mb-4 mx-5" controlId="formBasicPassword">
                                    <Form.Control name="confirmPassword" type="updatePassword" placeholder="Confirm Password" onChange={handleChange}/>
                                </Form.Group>

                            
=======

                        <Form>
                            <Form.Group className="mb-4 mx-5" controlId="formBasicUser">
                                <Form.Control name="username" type="username" placeholder="Change Username" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-4 mx-5" controlId="formBasicPassword">
                                <Form.Control name="password" type="password" placeholder="Change Password" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-4 mx-5" controlId="formConfirmPassword">
                                <Form.Control name="confirmPassword" type="updatePassword" placeholder="Confirm Password" onChange={handleChange} />
                            </Form.Group>


>>>>>>> cf61d1d81ac05463af1ac3d5b31c05a061ccb85b
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
<<<<<<< HEAD
                                                defaultValue={currentId ? `${foundUser.results.color}` : "black"}
=======
                                                defaultValue={hasColor ? profileInfo.result.color : "#098EC3"}
>>>>>>> cf61d1d81ac05463af1ac3d5b31c05a061ccb85b
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
<<<<<<< HEAD
                                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setFormData({...formData, avatar: base64})} />
                                         
=======
                                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setUserData({ ...userData, selectedFile: base64 })} />
>>>>>>> cf61d1d81ac05463af1ac3d5b31c05a061ccb85b
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h3 className="text-light">Profile Banner</h3>
<<<<<<< HEAD
                                        <Form.Group controlId="formFile" className="mb-3">
                                            <Form.Control type="file" name="avatar" onChange={handleChange}/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button className="btn-secondary" onClick={() => {setCurrentId(formData._id)}}> Edit </Button>
                                <Button className="btn-secondary mt-4 px-5 py-2" type="submit" onClick={handleSubmit}>
                                    Save Changes
                                </Button>
                            </Container>
                            </Form>
=======
                                        <Form.Group controlId="formBanner" className="mb-3">
                                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setUserData({ ...userData, selectedBanner: base64 })} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button className="btn-secondary mt-4 px-5 py-2" type="submit" onClick={handleSubmit}>
                                    Save Changes
                                </Button>
                                <Button className="btn-secondary mt-4 ms-3 px-5 py-2" type="refresh" onClick={refreshPage}>
                                    Refresh
                                </Button>
                            </Container>
                        </Form>
>>>>>>> cf61d1d81ac05463af1ac3d5b31c05a061ccb85b
                    </Card.Body>
                </Card >
            </Container>
        </>
    )
}

export default UserSettings;
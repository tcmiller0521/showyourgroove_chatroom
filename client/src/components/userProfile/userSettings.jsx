import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Card, Button, Form, Container, Row, Col } from "react-bootstrap";
import { editUser, editPassword } from "../../actions/auth";
import { selectUser } from "../../state/userSlice";
import FileBase from 'react-file-base64';



const UserSettings = () => {
    const profileInfo = useSelector(selectUser)
    const dispatch = useDispatch();
    const [userData, setUserData] = useState(profileInfo.result);
    const [currentId, setCurrentId] = useState(profileInfo.result._id);

    const emptyState = { username: '', selectedFile: '', selectedFiles: '', color: '' };

    

    const clear = () => {
        setCurrentId();
        setUserData(emptyState);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(editUser(currentId, userData));
        console.log(userData);
    }

    const handleUpdatePass = async (e) => {
        e.preventDefault();

        dispatch(editPassword(currentId, userData));
    }


    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })
    }

    function refreshPage() {
        window.location.reload();
    }

    const hasColor = (profileInfo.result.color)


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
                                <Form.Control name="username" type="username" placeholder="Change Username" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-4 mx-5" controlId="formBasicPassword">
                                <Form.Control name="password" type="password" placeholder="Change Password" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-4 mx-5" controlId="formConfirmPassword">
                                <Form.Control name="confirmPassword" type="updatePassword" placeholder="Confirm Password" onChange={handleChange} />
                            </Form.Group>
                            <Button className="btn-secondary mt-4 px-5 py-2" type="submit" onClick={handleUpdatePass}>
                                Update Password
                            </Button>


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
                                                defaultValue={hasColor ? profileInfo.result.color : "#098EC3"}
                                                title="Choose your color"
                                                className="color-picker"
                                                onChange={handleChange}
                                            />
                                        </>
                                    </Col>
                                    <Col>
                                        <h3 className="text-light mt-4">Avatar Settings</h3>
                                        <p>Upload your own avatar!</p>
                                        <Form.Group controlId="formFile" className="mb-3">
                                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setUserData({ ...userData, selectedFile: base64 })} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h3 className="text-light mt-4">Profile Banner</h3>
                                        <Form.Group controlId="formFile" className="mb-3">
                                            <FileBase type="files" multiple={false} onDone={({ base64 }) => setUserData({ ...userData, selectedFiles: base64 })} />
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
                    </Card.Body>
                </Card >
            </Container>
        </>
    )
}

export default UserSettings;
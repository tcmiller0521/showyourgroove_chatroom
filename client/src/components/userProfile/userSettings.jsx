import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Card, Button, Form, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { editUser } from "../../actions/auth";
import { selectAuth } from "../../state/authSlice";
import FileBase from 'react-file-base64';


const initialState = { username: '', password: '', confirmPassword: '', color: '', avatar: '', banner: '', };
const foundUser = JSON.parse(localStorage.getItem('profile'));

const UserSettings = () => {
    const dispatch = useDispatch();

    const [currentId, setCurrentId] = useState(foundUser.result._id);
    
    const [formData, setFormData] = useState(initialState);


    const clear = () => {
        setCurrentId();
        setFormData(initialState);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(editUser(currentId, formData));
        console.log(formData);

        clear();
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
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
                                    <Form.Control name="username" type="updateUsername" placeholder="Change Username" onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group className="mb-4 mx-5" controlId="formBasicPassword">
                                    <Form.Control name="password" type="updatePassword" placeholder="Change Password" onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group className="mb-4 mx-5" controlId="formBasicPassword">
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
                                                // defaultValue={currentId ? `${foundUser.results.color}` : "black"}
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
                                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setFormData({...formData, avatar: base64})} />
                                         
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h3 className="text-light">Profile Banner</h3>
                                        <Form.Group controlId="formFile" className="mb-3">
                                            <Form.Control type="file" name="avatar" onChange={handleChange}/>
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
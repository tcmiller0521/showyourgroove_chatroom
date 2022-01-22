import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userSignIn} from '../../actions/auth';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const initialState = { email: '', password: '' };

const LoginCard = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userSignIn(formData, history.push('/loading')));
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Card style={{ width: '35rem', height: '40rem' }} className="bg-dark mt-5 pt-4">
      <Card.Body>
        <Card.Title className="mt-2 mb-4 ">
          <h1>Sign In</h1>
        </Card.Title>
        <Card.Text>
          <Form>
            <Form.Group className="mb-4 mx-5" controlId="formBasicEmail">
              <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleChange}/>
            </Form.Group>


            <Form.Group className="mb-4 mx-5" controlId="formBasicPassword">
              <Form.Control name="password" type="password" placeholder="Create Password" onChange={handleChange}/>
            </Form.Group>


            <Button className="btn-secondary mt-2 px-5 py-2" type="submit" onClick={handleSubmit}>
              Login
            </Button>
          </Form>
          <Container className="mt-5">
            <h3 className='text-light'>Don't have an account?</h3>
            <p>Create one to start sharing your groove!</p>
            <Button className="btn-secondary px-4 py-2" >
              <Link to="/login" className="text-decoration-none text-light">
                Create an account
              </Link>
            </Button>
          </Container>
        </Card.Text>
      </Card.Body>
    </Card >
  );
};

export default LoginCard;
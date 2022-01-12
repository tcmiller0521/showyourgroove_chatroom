import React, { useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { login } from "../../state/authSlice";
import { clearMessage } from "../../state/messageSlice";

const Login = (props) => {
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    setLoading(true);

    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        props.history.push("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  return (
    <Card style={{ width: '35rem', height: '40rem' }} className="bg-dark mt-5 pt-4">
            <Card.Body>
                <Card.Title className="my-4 ">
                    <h1>Sign In</h1>
                </Card.Title>
                <Card.Text>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleLogin}
                    >
                        <Form>
                            <Form.Group className="mb-3 mx-5" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                                <ErrorMessage
                                    name="username"
                                    component="div"
                                    className="alert alert-danger"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3 mx-5" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                                <ErrorMessage
                                    name="username"
                                    component="div"
                                    className="alert alert-danger"
                                />
                                <Form.Text><Link to="/forgotpassword" className="text-success">Forgot Passsword?</Link></Form.Text>
                            </Form.Group>

                            <Form.Group>
                                <Button className="btn-secondary mt-2 px-5 py-2" type="submit" disabled=
                                {loading && (
                                        <span className="spinner-border spinner-border-sm"></span>
                                    )}>
                                    <span>Login</span>
                                </Button>
                            </Form.Group>
                        </Form>
                    </Formik>

                    {message && (
                        <Form.Group>
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </Form.Group>
                    )}
                    <Container className="mt-5">
                        <h1>New Here?</h1>
                        <p>Let's get you set up to start sharing your groove!</p>
                        <Button className="btn-secondary px-5 py-2" type="submit">
                            <Link to="/register" className="text-decoration-none text-light">
                                Register
                            </Link>
                        </Button>
                    </Container>
                </Card.Text>
            </Card.Body>
        </Card>
  );
};

export default Login;


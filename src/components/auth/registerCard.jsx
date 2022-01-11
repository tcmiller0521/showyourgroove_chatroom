import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import { register } from "../../state/authSlice";
import { clearMessage } from "../../state/messageSlice";

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Register = () => {
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      )
      .required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 40
      )
      .required("This field is required!"),
  });

  const handleRegister = (formValue) => {
    const { username, email, password } = formValue;

    setSuccessful(false);

    dispatch(register({ username, email, password }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  return (
    <Card style={{ width: '35rem', height: '40rem' }} className="bg-dark mt-5 pt-4">
<Card.Body>
    <Card.Title className="mt-2 mb-4 ">
        <h1>Create an account</h1>
    </Card.Title>
    <Card.Text>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
        >
            <Form>
                {!successful && (
                    <div>
                        <Form.Group className="mb-4 mx-5" controlId="formBasicEmail">
                            <Form.Control name="email" type="email" placeholder="Enter email" />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="alert alert-danger"
                            />
                        </Form.Group>
                        <Form.Group className="mb-4 mx-5" controlId="formBasicUser">
                            <Form.Control name="username" type="username" placeholder="Create Username" />
                            <ErrorMessage
                                name="username"
                                component="div"
                                className="alert alert-danger"
                            />
                        </Form.Group>
                        <Form.Group className="mb-4 mx-5" controlId="formBasicPassword">
                            <Form.Control name="password" type="password" placeholder="Create Password" />
                        </Form.Group>
                        <Form.Group className="mb-4 mx-5" controlId="formBasicPassword2">
                            <Form.Control type="password" placeholder="Re-Enter Password" />
                        </Form.Group>
                        <Button className="btn-secondary mt-2 px-5 py-2" type="submit">
                            Create Account
                        </Button>
                    </div>
                )}
            </Form>
        </Formik>

        {message && (
            <Form.Group>
                <div className={successful ? "alert alert-sucess" : "alert alert-danger"}
                role="alert"
                >
                    {message}
                </div>
            </Form.Group>
        )}
        <Container className="mt-5">
            <h3 className='text-light'>Already have an account?</h3>
            <p>Login to continue sharing your groove!</p>
            <Button className="btn-secondary px-5 py-2" type="submit">
                <Link to="/login" className="text-decoration-none text-light">
                    Login
                </Link>
            </Button>
        </Container>
    </Card.Text>
</Card.Body>

</Card>
  );
};

export default Register;
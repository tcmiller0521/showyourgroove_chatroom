import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

import { Container } from "react-bootstrap";

const Home = () => {
    const [ content, setContent ] = useState(" ");

    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const_content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
                
                setContent(_content);
            }
        );
    }, []);

    return (
        <Container>
            <header className="jumbotron">
                <h3>{content}</h3>
            </header>
        </Container>
    );
};

export default Home;
import React, { useState, useEffect } from "react";

import { Container } from "react-bootstrap";

import UserService from "../../services/user.service";

const BoardUser = () => {
    const [content, setContent] = useState(" ");

    useEffect(() => {
        UserService.getUserBoard().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    }, []);

    return (
        <>
            <Container>
                <header className="jumbotron">
                    <h3>{content}</h3>
                </header>
            </Container>
        </>
    );
};

export default BoardUser;
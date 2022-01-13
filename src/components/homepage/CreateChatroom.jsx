import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import React, { useState } from 'react';
import CustomchatModal from "../Customchat/CustomchatModal.js";

const CreateChatroom = () => {
    const [modalShow, setModalShow] = useState(false);
    const handleShow = () => setModalShow(true);

    function handleSubmit(e) {
        e.preventDefault()
        handleShow();
    }

    return (
        <>
            <Container fluid className="containers mb-5 pb-3">
                <h1>Don't see a room that fits your groove?</h1>
                <Button onClick={handleSubmit} modalShow={modalShow} setModalShow={setModalShow} className="btn-secondary pt-3 px-5 mt-2">
                    <h1>Create your own room</h1>
                </Button>
                <CustomchatModal show={modalShow} onHide={() => setModalShow(false)} />
            </Container>
        </>
    )
}

export default CreateChatroom;
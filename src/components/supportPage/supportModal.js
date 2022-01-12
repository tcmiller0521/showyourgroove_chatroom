import { Modal, Button } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
    console.log(props)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Thank you for your Feedback
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {`Here's your message: '${props.query}'`}
                <br />
                We have received your message and will respond ASAP
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;
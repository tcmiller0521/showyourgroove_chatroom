import { Modal, Button, Form } from 'react-bootstrap';

function CustomchatModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create your room
                </Modal.Title>
            </Modal.Header>
            <Form className='bg-secondary'>
                <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder="Room name" />
                <Form.Control type='color' />
            </Form>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomchatModal;
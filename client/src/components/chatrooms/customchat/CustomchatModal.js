import { Modal, Button, Form } from 'react-bootstrap';
import { addContent, selectContent } from '../../../state/contentSlice';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react';

function SubmitHandler() {
    const dispatch = useDispatch();
    const content = useSelector(selectContent);
    const [response, setResponse] = useState({ title: "" })
    const newRoom = [
        ...content, response];

    if (response.title) {
        dispatch(addContent(newRoom))
        setResponse({})
    }

    const updateField = (e) => {
        setResponse({
            ...response,
            [e.target.title]: e.target.value
        })
    }
}

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
                <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder="Room name" onChange={updateField} />
                <Form.Control type='color' onChange={updateField} />
            </Form>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button onClick={SubmitHandler}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomchatModal;
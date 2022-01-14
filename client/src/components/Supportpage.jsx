import './supportPage/supportpage.css';
import TopNav from './navigation/TopNav';
import { Accordion, Container, Form} from 'react-bootstrap';
import Footer from './navigation/Footer';
import MyVerticallyCenteredModal from './supportPage/supportModal';
import { useState } from 'react';



const Support = () => {
    const [email, setEmail] = useState();
    const [query, setQuery] = useState();
    const [modalShow, setModalShow] = useState(false);
    const handleShow = () => setModalShow(true);

    function handleSubmit(e) {
        e.preventDefault()
        setEmail(e.target.email.value)
        setQuery(e.target.query.value)
        handleShow();
    }

    return (
        <>
            <body className='supportbg'>
                <TopNav />
                <div>
                    <Container className='bodycontainer'>
                        <Accordion className='accordionseparate' defaultActiveKey={['0']} alwaysopen='true'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>FAQ:</Accordion.Header>
                                <Accordion.Body>
                                    An area to (hopefully) find solutions to any problems you may have.
                                    <Accordion>
                                        <Accordion.Item eventKey='2'>
                                            <Accordion.Header>Q1: </Accordion.Header>
                                            <Accordion.Body>yay</Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='3'>
                                            <Accordion.Header>Q2: </Accordion.Header>
                                            <Accordion.Body>wow</Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='4'>
                                            <Accordion.Header>Q3: </Accordion.Header>
                                            <Accordion.Body>cool</Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey='0'>
                            <Accordion.Item>
                                <Accordion.Header>Contact Info:</Accordion.Header>
                                <Accordion.Body>
                                    Email: Showyourgroove@support.net
                                    <br />
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Control name='email' placeholder='Enter your email'></Form.Control>
                                        <Form.Control name='query' placeholder='Tell us about your problem'></Form.Control>
                                        <input type='submit' className='hiddenformbutton' />
                                        <MyVerticallyCenteredModal email={email} query={query} show={modalShow} onHide={() => setModalShow(false)} />
                                    </Form>
                                    Phone: (555)555-5555
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Container>
                </div>
            </body>
            <Footer />
        </>
    )
}

export default Support;
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

const CreateChatroom = () => {
    return (
        <>
            <Container fluid className="containers mb-5 pb-3">
                <h1>Don't see a room that fits your groove?</h1>
                <Button className="btn-secondary pt-3 px-5 mt-2">
                    <h1>Create your own room</h1>
                </Button>
            </Container>
        </>
    )
}

export default CreateChatroom;
import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';
import Header from '../../assets/images/showyourgroove-header.png'

const HomepageHeader = () => {
    return (
        <Container fluid className="m-0 p-0 pb-5">
            <Image fluid src={Header} />
        </Container>
    )
}

export default HomepageHeader;
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Room1 from '../../assets/images/carousel1.png'
import Profile1 from '../../assets/images/carousel2.png'

const ShareYourStyleCarousel = () => {
    return (
        <>
            <Container fluid className="containers mb-5">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Room1}
                            alt="First slide"
                        />
                        <Container fluid className='carousel-text'>
                            <Carousel.Caption>
                                <h2>Create your own rooms!</h2>
                                <p>Don't see a genre that you like? Create your own room and design it the way you want it! Invite your friends or leave it open to the public to meet some new people! The options are endless and the decisions are totally up to you!</p>
                            </Carousel.Caption>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Profile1}
                            alt="Second slide"
                        />
                        <Container fluid className='carousel-text'>
                            <Carousel.Caption>
                                <h2>Customize your profile!</h2>
                                <p>Set your favorite color, profile banner and avatar to match your groove! Find your favorite rooms and chat with your friends!</p>
                            </Carousel.Caption>
                        </Container>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    )
}

export default ShareYourStyleCarousel;
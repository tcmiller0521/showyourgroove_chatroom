import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Photo from '../../assets/images/showyourgroove-header.png'

const ShareYourStyleCarousel = () => {
    return (
        <>
            <Container fluid className="containers mb-5">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Photo}
                            alt="First slide"
                        />
                        <Container fluid className='carousel-text'>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Photo}
                            alt="Second slide"
                        />
                        <Container fluid className='carousel-text'>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Photo}
                            alt="Third slide"
                        />
                        <Container fluid className='carousel-text'>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Container>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    )
}

export default ShareYourStyleCarousel;
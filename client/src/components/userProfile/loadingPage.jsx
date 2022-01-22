import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { Container, Image } from 'react-bootstrap';
import ReadyToGroove from '../../assets/images/GetGroovy.png'

function LoadingPage() {

    setTimeout(function () {
        window.location.href = '/profile';
    }, 5000);

    return (
        <>
            <Container fluid className="d-flex flex-column justify-content-center align-items-center mt-5 pt-5">
                <Image src={ReadyToGroove} />
                <ReactLoading type={"bars"} color={"#E00095"} height={500} width={250} />
            </Container>
        </>
    )
}


export default LoadingPage;

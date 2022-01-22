import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { Container, Image } from 'react-bootstrap';
import CyaNextTime from '../../assets/images/CyaLater.png'

function LogoutLoadingPage() {

    setTimeout(function () {
        window.location.href = '/';
    }, 5000);

    return (
        <>
            <Container fluid className="d-flex flex-column align-items-center justify-content-center mt-5 pt-5">
                <Image src={CyaNextTime} />
                <ReactLoading type={"bars"} color={"#E00095"} height={500} width={250} />
            </Container>
        </>
    )
}


export default LogoutLoadingPage;

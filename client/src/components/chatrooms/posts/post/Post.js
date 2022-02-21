// create post how you want post to look
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import RoomsInfo from '../../../../assets/contentFiles/Rooms';
import { selectUser } from '../../../../state/userSlice';
import DefaultAvatar from '../../../../assets/images/DefaultAvatar.png';
import { selectPostList } from '../../../../state/postListSlice';
import { selectAuth } from '../../../../state/authSlice';



const Post = ({ post, setCurrentId }) => {
    const { index } = useParams();
    const dispatch = useDispatch();
    const userInfo = useSelector(selectUser)


    

    return (

        <>
            <Container>
                <Row>
                    <Col>
                        <div className={`${RoomsInfo[index].link}message`}>
                            <div className='p-1'>
               
                            <p> {post.message} </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
        // useParams to get themes to style post bubble

    )
}

export default Post

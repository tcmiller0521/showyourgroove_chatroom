// create post how you want post to look
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import RoomsInfo from '../../../../assets/contentFiles/Rooms';
import { selectUser } from '../../../../state/userSlice';
import DefaultAvatar from '../../../../assets/images/user-avatar.png';
import { selectPostList } from '../../../../state/postListSlice';
import { selectAuth } from '../../../../state/authSlice';



const Post = ({ post, setCurrentId }) => {
    const { index } = useParams();
    const dispatch = useDispatch();
    const userInfo = useSelector(selectUser)


    const hasAvatar = (userInfo.result.avatar)

    return (

        <>
            <Container>
                <Row>
                    <Col lg={1} md={1} className="me-2 mb-3">
                            <img style={{height: "2rem", width: "2rem"}} className="avatar-img" src={hasAvatar ? userInfo.result.avatar : DefaultAvatar} />
                    </Col>
                    <Col>
                        <div className={`${RoomsInfo[index].link}message`}>
                            <div className='p-1'>
                            <h6> {post.createdBy} </h6>
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

// hasAvatar ? userInfo.result.avatar : 
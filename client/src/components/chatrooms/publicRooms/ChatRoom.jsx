import { Row, Col, Container, Form, Button, Stack } from 'react-bootstrap'

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPostList } from '../../../state/postListSlice';
import { createPostList, editPost } from '../../../actions/messages';

import Posts from '../posts/Posts';


// import Rooms from '../rooms/Rooms'

function ChatRoom({ currentId, setCurrentId }) {

    const dispatch = useDispatch();

    const postObj = {
        message: '',
    };

    const [ postData, setPostData ] = useState(postObj);

    const allPosts = useSelector(selectPostList);
    const foundMessage = (currentId ? allPosts.find((post) => post._id === currentId) : null)

    const clear = () => {
        setCurrentId(0);
        setPostData(postObj);
        console.log(postObj)
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(e)
        if (currentId === 0) {
            dispatch(createPostList(postData))
        }
        else {
            dispatch(editPost(currentId, postData))
        }
        clear();
    };

    const changeHandler = (e) => {
        setPostData ({
            ...postData,
            [ e.target.name ]: e.target.value,
        });
    };

    useEffect(() => {
        if (foundMessage) setPostData(foundMessage)
    }, [foundMessage])

    return (
        <div>
            {/* <Rooms /> */}
            <Container className="mainChat">
                {/* Chatroom Header */}
                <Row className='chatHead'>
                    <Col>
                        {/* Chatroom title */}
                        <h1>This is the chatroom</h1> 
                    </Col>
                </Row>
                <Row className='chatBody'>
                    {/* Chatroom Feed */}

                    <Col xs="9" className='chatFeed'>
                        <Posts setCurrentId={setCurrentId}/>
                    </Col> 
                    {/* Chatroom Population (current users populating room) */}
                    <Col xs="2"className='chatPop'></Col>
                </Row>
                <Row>
                    {/* Chatroom Input */}
                    {/* <Col xs='auto'> */}
                        <Stack direction="horizontal" gap={3}>
                            <Form autoComplete='off' onSubmit={submitHandler}>
                                <Form.Control  className="me-auto" name="message" placeholder="What's your Groove?" value={postData.message} onChange={changeHandler}/>
                            
                                <Button variant="secondary" type="submit" onClick={submitHandler}>POST</Button>
                            </Form>
                        </Stack>
                        {/* <form autoComplete='off' onSubmit={submitHandler}>
                            <div><input name="message" placeholder="What's your Groove?" value={postData.message} onChange={changeHandler}/></div>
                            <button type="submit">Post</button>
                        </form> */}

                    {/* </Col> */}
                </Row>
            </Container>
            
            
        </div>
    )
}

export default ChatRoom
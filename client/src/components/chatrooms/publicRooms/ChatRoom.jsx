import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


import { selectPostList } from '../../../state/postListSlice';

import { createPost } from '../../../state/postListSlice';

import Posts from '../posts/Posts';

import {
    Row, 
    Col, 
    Container, 
    Form,
    Button,
    Stack 
} from 'react-bootstrap'

import RoomsInfo from '../../../assets/contentFiles/Rooms'

function ChatRoom() {
    const dispatch = useDispatch();
    const allPosts = useSelector(selectPostList);
    const {index} = useParams();
    console.log(index);
    

    const postObj = {
        message: '',
    };

    // const [ style, setStyle ] = useState(Rooms[index].link)
    const [ postData, setPostData ] = useState(postObj);

    const clear = () => {
        setPostData(postObj);
        console.log(postObj)
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(e)
        dispatch(createPost(postData));
        

        clear();
    };

    const changeHandler = (e) => {
        setPostData ({
            ...postData,
            [ e.target.name ]: e.target.value,
        });
    };

    return (
        <div>
            {/* <Rooms /> */}
            {/* className=`${theme}`} */}
            <Container className="mainChat"> 
                {/* Chatroom Header */}
                <Row className={`${RoomsInfo[index].link}chatHead`}>
                    <Col>
                        {/* Chatroom title */}
                        <h1>{RoomsInfo[index].title}</h1> 
                    </Col>
                </Row>
                <Row className='chatBody'>
                    {/* Chatroom Feed */}

                    <Col xs="9" className={`${RoomsInfo[index].link}chatFeed`}>
                        <Posts />
                    </Col> 
                    {/* Chatroom Population (current users populating room) */}
                    <Col xs="2"className={`${RoomsInfo[index].link}chatPop`}></Col>
                </Row>
                <Row>
                    {/* Chatroom Input */}
                    {/* <Col xs='auto'> */}
                        <Stack direction="horizontal" gap={3}>
                            <Form autoComplete='off' onSubmit={submitHandler}>
                                <Form.Control  className="me-auto" name="message" placeholder="What's your Groove?" value={postData.message} onChange={changeHandler}/>
                            
                                <Button variant="secondary" type="submit">POST</Button>
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

import { Row, Col, Container, Form, Button, Stack } from 'react-bootstrap'

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectPostList } from '../../../state/postListSlice';
import { createPostList, editPost } from '../../../actions/messages';

import ReactScrollableFeed from 'react-scrollable-feed';

import Posts from '../posts/Posts';
import socket from '../../../Socket/socket';

import RoomsInfo from '../../../assets/contentFiles/Rooms'
// import UsersInfo from '../../../assets/contentFiles/Users';
import contentSlice from '../../../state/contentSlice';
import { selectUsers } from '../../../state/userSlice';

function ChatRoom({ currentId, setCurrentId }) {

    const dispatch = useDispatch();
    const allPosts = useSelector(selectPostList);
    const {index} = useParams();
    console.log(index);
    

    const postObj = {
        message: '',
    };

    // const [ style, setStyle ] = useState(Rooms[index].link)
    const [ postData, setPostData ] = useState(postObj);

    const usersContent = useSelector(selectUsers);

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
            socket.emit('usermessage', postData, RoomsInfo[index].link)
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
            {/* className=`${theme}`} */}
            <Container className="mainChat"> 
                {/* Chatroom Header */}
                <Row className={`${RoomsInfo[index].link}chatHead`}>
                    <Col>
                        {/* Chatroom title */}
                        <h1>{RoomsInfo[index].title}</h1> 
                    </Col>
                </Row>
                <Row>
                    <Stack direction="horizontal" gap={3} className='chatBody'>
                        {/* Chatroom Feed */}
                        <Col xs="6" className={`${RoomsInfo[index].link}chatFeed`} id="messageBody">
                            <ReactScrollableFeed>
                                <Posts setCurrentId={setCurrentId}/>
                            </ReactScrollableFeed>
                        </Col> 

                        {/* Chatroom Population (current users populating room) */}
                        <Col xs={{ span: 2, offset: 1 }} className={`${RoomsInfo[index].link}chatPop`}>
                            {usersContent.map((UsersInfo, i) => (
                            <div key={i} className={`${RoomsInfo[index].link}userPopName`}> 
                                <img src={UsersInfo.avatar} alt="" className={`${RoomsInfo[index].link}userAv`}/>
                                <p>{UsersInfo.username}</p>
                            </div>
                            ))} 
                        </Col>
                    </Stack>
                </Row>
                <Row>
                    {/* Chatroom Input */}
                    <Col xs='8'>
                        <Stack direction="horizontal" gap={3}>
                            <Form autoComplete='off' onSubmit={submitHandler} className="chatForm">
                                <Form.Control  className="me-auto" name="message" placeholder="What's your Groove?" value={postData.message} onChange={changeHandler}/>
                            
                                <Button className="chatSubmit" variant="secondary" type="submit" onClick={submitHandler}>POST</Button>
                            </Form>
                        </Stack>
                        {/* <form autoComplete='off' onSubmit={submitHandler}>
                            <div><input name="message" placeholder="What's your Groove?" value={postData.message} onChange={changeHandler}/></div>
                            <button type="submit">Post</button>
                        </form> */}

                    </Col>
                </Row>
            </Container>
            
            
        </div>
    )
}

export default ChatRoom

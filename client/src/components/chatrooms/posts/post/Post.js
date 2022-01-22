// create post how you want post to look
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';

import {useParams} from 'react-router-dom';
import RoomsInfo from '../../../../assets/contentFiles/Rooms';



const Post = ({ post, setCurrentId }) => {
    const {index} = useParams();
    const dispatch = useDispatch();

    return (
        // useParams to get themes to style post bubble
        <div className={`${RoomsInfo[index].link}message`}>
            {/* <div>
                <Button onClick={() => setCurrentId(post._id)}>
                    Edit
                </Button>
            </div> */}
            <h6 className='text'> { post.message } </h6>
        </div>
    )
}

export default Post
// create post how you want post to look
import React from 'react';
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();

    return (
        <div className="post">
            <div>
                {/* <Button onClick={() => setCurrentId(post._id)}>
                    Edit
                </Button> */}
            </div>
            <h6> { post.message } </h6>
        </div>
    )
}

export default Post
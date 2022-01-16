// create post how you want post to look
import React from 'react';
// import { useDispatch } from 'react-redux';

const Post = ({ post, setCurrentId }) => {
    // const dispatch = useDispatch();

    return (
        <div className="post">
            <h6> { post.message } </h6>
        </div>
    )
}

export default Post
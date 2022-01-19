import React from 'react';
import { useSelector } from 'react-redux';
import { selectPostList } from '../../../state/postListSlice';

import Post from './post/Post';

const Posts = ({ setCurrentId }) => {
    const allPosts = useSelector(selectPostList);

    return (
        !allPosts.length ? <h1>Start Your Groove</h1> : (
            <div className="post">
                {allPosts.map((post) => (
                    <div key= {post._id}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </div>
                ))}
            </div>
        )
    )
}

export default Posts
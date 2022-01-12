import React from 'react';
import { useSelector } from 'react-redux';
import { selectPostList } from '../../../state/postListSlice';

import Post from './post/Post';

const Posts = () => {
    const allPosts = useSelector(selectPostList);

    return (
        !allPosts.length ? <h1>Start Your Groove</h1> : (
            <div className="post">
                {allPosts.map((post, index) => (
                    <div key= {index}>
                        <Post post={post} index={index} />
                    </div>
                ))}
            </div>
        )
    )
}

export default Posts
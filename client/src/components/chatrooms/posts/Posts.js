import React from 'react';
import { useSelector } from 'react-redux';
import { selectPostList } from '../../../state/postListSlice';
import { useDispatch } from 'react-redux';

import Post from './post/Post';

const Posts = ({ setCurrentId }) => {
    const allPosts = useSelector(selectPostList);
    const dispatch = useDispatch();
    const postInfo = useSelector(selectPostList)

    return (
        !allPosts.length ? <h1>Start Your Groove</h1> : (
            <div className="post">
                {postInfo.map((post, index) => (
                    <div key= {index}>
                        <Post post={post} index={index} />
                    </div>
                ))}
            </div>
        )
    )
}

export default Posts
import * as api from '../api/index';

import { getPosts, createPost, updatePost } from '../state/postListSlice';

export const retrieveMessageList = () => async (dispatch) => {
    try {
        const { data } = await api.getMessages();
        dispatch(getPosts(data))
    } catch (error) {
        console.log(error)
    }
}

export const createPostList = (post) => async (dispatch) => {
    try {
        const { data } = await api.createMessage(post);
        dispatch(createPost(data))
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const editPost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.editMessage(id, post);
        dispatch(updatePost(data))
    } catch (error) {
        console.log(error)
    }
}
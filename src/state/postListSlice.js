// create slice that will handle front end state and reducers
import { createSlice } from '@reduxjs/toolkit'

const postListSlice = createSlice({
    name: 'postList',
    initialState: {
        postList: [],
    },
    reducers: {
        // getPosts
        getPosts: (state, action) => {
            state.postList = (action.payload);
        },

        // createPost
        createPost: (state, action) => {
            state.postList.push(action.payload);
            console.log(action.payload)
        },
    }
})

export const { createPost } = postListSlice.actions;
export const selectPostList = (state) => state.postList.postList;
export default postListSlice.reducer
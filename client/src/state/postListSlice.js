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
            console.log(action.payload)
            state.postList = (action.payload);
        },

        // createPost
        createPost: (state, action) => {
            console.log(action.payload)
            state.postList.push(action.payload);
        },

        //updatePost 
        updatePost: (state, action) => {
            console.log(action.payload)
            state.postList.map((post) => (post._id === action.payload._id ? action.payload : post));
        },
        deletePost: (state, action) => {
            state.postList.filter((post) => post._id !== action.payload);
        }
    }
})

export const { createPost, getPosts, updatePost, deletePost } = postListSlice.actions;
export const selectPostList = (state) => state.postList.postList;
export default postListSlice.reducer;
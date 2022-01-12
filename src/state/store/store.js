import { configureStore } from '@reduxjs/toolkit';
import ContentReducer from '../contentSlice';
import postReducer from '../postListSlice'

export const store = configureStore({
    reducer:{
        content: ContentReducer,
        postList: postReducer,
    }
});
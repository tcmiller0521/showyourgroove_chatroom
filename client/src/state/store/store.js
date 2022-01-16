import { configureStore } from '@reduxjs/toolkit';
import ContentReducer from '../contentSlice';

import authReducer from '../authSlice';
import messageReducer from '../messageSlice';
import postReducer from '../postListSlice'


export const store = configureStore({
    reducer:{
        content: ContentReducer,
        auth: authReducer,
        message: messageReducer,
      postList: postReducer,

    }
});
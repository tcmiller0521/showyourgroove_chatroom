import { configureStore } from "@reduxjs/toolkit";
import ContentReducer from '../contentSlice';

export const store = configureStore({
    reducer:{
        content: ContentReducer,
    }
});
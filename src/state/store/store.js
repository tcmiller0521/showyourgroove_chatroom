import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from '../../reducers'
import ContentReducer from '../contentSlice';


export const store = configureStore({
    reducer:{
        content: ContentReducer,
        rootReducer,
    }
});
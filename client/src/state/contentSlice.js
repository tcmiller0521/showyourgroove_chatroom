import { createSlice } from '@reduxjs/toolkit'
import RoomInfo from '../assets/contentFiles/Rooms'

// let cards = []
// let storedCards = JSON.parse(localStorage.getItem('storedContent'))
// storedCards ? cards = storedCards: cards = RoomInfo

export const contentSlice = createSlice ({
    name: 'content',
    initialState: {
        content: RoomInfo
    },
    reducers: {
        addContent: (state, action) => {
            console.log(action.payload)
        state.content.push(action.payload)
        localStorage.setItem('storedContent', JSON.stringify(state.content));
        },
        deleteContent: (state, action) => {
            state.content.splice(action.payload, 1);
            localStorage.setItem("storedContent", JSON.stringify(state.content))
        }
    }
})

export const { addContent, deleteContent } = contentSlice.actions;
export const selectContent = (state) => state.content.content;
console.log()
export default contentSlice.reducer;
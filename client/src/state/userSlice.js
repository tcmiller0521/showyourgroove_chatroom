import { createSlice } from "@reduxjs/toolkit";
import UsersInfo from "../assets/contentFiles/Users";


export const usersSlice = createSlice ({
    name: 'users',
    initialState: {
        users: JSON.parse(localStorage.getItem('profile'))
    },
    reducers: {
        addUsers: (state, action) => {
            console.log(action.payload)
        state.users.push(action.payload)
        // localStorage.setItem('storedUsers', JSON.stringify(state.users));
        }
    }
})

export const { addUsers } = usersSlice.actions;
export const selectUser = (state) => state.users.users;
console.log(selectUser)
export default usersSlice.reducer;

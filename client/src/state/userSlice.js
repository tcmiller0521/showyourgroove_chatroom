import { createSlice } from "@reduxjs/toolkit";
import UsersInfo from "../assets/contentFiles/Users";


export const usersSlice = createSlice ({
    name: 'users',
    initialState: {
        users: UsersInfo
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
export const selectUsers = (state) => state.users.users;
console.log(selectUsers)
export default usersSlice.reducer;

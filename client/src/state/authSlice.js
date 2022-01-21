import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    auth: [],
    user: {},
  },
  reducers: {
    getUser: (state, action) => {
      state.auth = action.payload
    },
    loginUser(state, action) {
      console.log(action.payload)
      localStorage.setItem('profile', JSON.stringify(action.payload ));
    },
    logout() {
      localStorage.clear();
    },
    updateUser: (state, action) => {
      state.auth.map((userInfo) => (userInfo._id === action.payload._id ? action.payload : userInfo));
      console.log(action.payload)
      localStorage.setItem('profile', JSON.stringify(action.payload));
    },
    updatePassword: (state, action) => {
      state.auth.map((userInfo) => (userInfo._id === action.payload._id ? action.payload : userInfo));
      console.log(action.payload)
    },
    loadUser: (state, action) => {
      state.user = JSON.parse(localStorage.getItem('profile'))
      console.log(state.user)
    }
  }
});


export const { loginUser, logout, updateUser, getUser, loadUser, updatePassword } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectAuth = (state) => state.auth.auth;
export default authSlice.reducer;








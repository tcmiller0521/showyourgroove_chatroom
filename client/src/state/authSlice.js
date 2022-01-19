import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    auth: { authData: null }
  },
  reducers: {
    getUser: (state, action) => {
      state.auth = action.payload
    },
    loginUser(state, action) {
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
    },
    logout() {
      localStorage.clear();
    },
    updateUser: (state, action) => {
      state.auth.map((formData) => (formData._id === action.payload._id ? action.payload : formData));
      localStorage.setItem('profile', JSON.stringify({...action.payload}));
    }
  }
});

export const { loginUser, logout, updateUser, getUser } = authSlice.actions;
export const selectAuth = (state) => state.auth.auth;
export default authSlice.reducer;








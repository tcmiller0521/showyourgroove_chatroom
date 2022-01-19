import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    auth: { authData: null }
  },
  reducers: {
    loginUser(state, action) {
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
    },
    logout() {
      localStorage.clear();
    },
    updateUser: (state, action) => {
      state.auth.map((user) => (user._id === action.payload._id ? action.payload : user));
      localStorage.setItem('profile', JSON.stringify({...action.payload}));
    }
  }
});

export const { loginUser, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;








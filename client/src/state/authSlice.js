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
    }
  }
});

export const { loginUser, logout } = authSlice.actions;
export default authSlice.reducer;








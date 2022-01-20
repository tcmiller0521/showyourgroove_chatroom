import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: JSON.parse(localStorage.getItem('profile')),
  },
  reducers: {
    loadUser: (state, action) => {
      // state.user = localStorage.getItem('profile')
      console.log("state.user")
    }
  }
});

export const { loadUser } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;








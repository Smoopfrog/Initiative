import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    inGame: false
  },
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
    joinGame: (state) => {
      state.inGame = true;
    },
    leaveGame: (state) => {
      state.inGame = false;
    }
  }
})

export const {logIn, logOut, joinGame, leaveGame} = userSlice.actions;
export const selectUser = state => state.user.user;
export default userSlice.reducer;
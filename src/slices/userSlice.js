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
    joinGame: (state, action) => {
      state.inGame = action.payload;
    },
    leaveGame: (state) => {
      state.inGame = null;
    }
  }
})

export const {logIn, logOut, joinGame, leaveGame} = userSlice.actions;
export const selectUser = state => state.user.user;
export const inGame = state => state.user.inGame
export default userSlice.reducer;
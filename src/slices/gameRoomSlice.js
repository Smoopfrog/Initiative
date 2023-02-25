import { createSlice } from "@reduxjs/toolkit";

export const gameRoomSlice = createSlice({
  name: "gameRoom",
  initialState: {
    characters: [],
  },
  reducers: {
    setGameRoomCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setGameRoomCharactersNull: (state) => {
      state.characters = [];
    },
  },
});

export const { setGameRoomCharacters, setGameRoomCharactersNull } = gameRoomSlice.actions;
export const selectGameRoomCharacters = (state) => state.gameRoom.characters;
export default gameRoomSlice.reducer;

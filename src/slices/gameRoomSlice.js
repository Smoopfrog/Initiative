import { createSlice } from "@reduxjs/toolkit";

export const gameRoomSlice = createSlice({
  name: "gameRoomCharacters",
  initialState: {
    gameRoomcharacters: []
  },
  reducers: {
    setGameRoomCharacters: (state, action) => {
      state.gameRoomcharacters = action.payload;
    },
    setGameRoomCharactersNull: (state) => {
      state.gameRoomcharacters = [];
    }
  }
})

export const {setGameRoomCharacters, setGameRoomCharactersNull} = gameRoom.actions;
export const selectCharacters = state => state.gameRoomcharacters.gameRoomcharacters;
export default gameRoom.reducer;
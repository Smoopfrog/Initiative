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
    updateCharacterInfo: (state, action) => {
      state.characters = state.characters.map((character) => {
        if (character.id === action.payload.id) {
          return {
            ...character,
            [action.payload.info]: action.payload.value,
          };
        }
        return character;
      });
    },
  },
});

export const {
  setGameRoomCharacters,
  setGameRoomCharactersNull,
  updateCharacterInfo,
} = gameRoomSlice.actions;
export const selectGameRoomCharacters = (state) => state.gameRoom.characters;
export default gameRoomSlice.reducer;

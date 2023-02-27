import { createSlice, current } from "@reduxjs/toolkit";

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
    updateInitiative: (state, action) => {
      const initcharacters = state.characters.map((character) => {
        if (character.id === action.payload.id) {
          return {
            ...character,
            initiative: action.payload.initiative,
          };
        }
        return character;
      });
      state.characters = initcharacters;
    },
  },
});

export const {
  setGameRoomCharacters,
  setGameRoomCharactersNull,
  updateInitiative,
} = gameRoomSlice.actions;
export const selectGameRoomCharacters = (state) => state.gameRoom.characters;
export default gameRoomSlice.reducer;

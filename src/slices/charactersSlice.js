import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
  },
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setCharactersNull: (state) => {
      state.characters = [];
    },
  },
});

export const { setCharacters, setCharactersNull } = charactersSlice.actions;
export const selectCharacters = (state) => state.characters.characters;
export default charactersSlice.reducer;

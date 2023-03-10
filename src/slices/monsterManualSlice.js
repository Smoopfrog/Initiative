import { createSlice } from "@reduxjs/toolkit";

export const monsterManualSlice = createSlice({
  name: "monsterManual",
  initialState: {
    monster: {},
  },
  reducers: {
    setMonster: (state, action) => {
      state.monster = action.payload;
    },
    setMonsterNull: (state) => {
      state.monster = null;
    },
  },
});

export const { setMonster, setMonsterNull } = monsterManualSlice.actions;
export const selectMonsterManualSearch = (state) => state.monsterManual.monster;
export default monsterManualSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const monsterManualSlice = createSlice({
  name: "monsterManual",
  initialState: {
    monster: false,
  },
  reducers: {
    setMonster: (state, action) => {
      state.monster = action.payload;
    },
    setMonsterNull: (state) => {
      state.monster = false;
    },
  },
});

export const { setMonster, setMonsterNull } = monsterManualSlice.actions;
export const selectMonsterManual = (state) => state.monsterManual.monster;
export default monsterManualSlice.reducer;

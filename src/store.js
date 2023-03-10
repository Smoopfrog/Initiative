import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import charactersReducer from "./slices/charactersSlice";
import gameRoomReducer from "./slices/gameRoomSlice";
import monsterManualReducer from "./slices/monsterManualSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    characters: charactersReducer,
    gameRoom: gameRoomReducer,
    monsterManual: monsterManualReducer,
  },
});

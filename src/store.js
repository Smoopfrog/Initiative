import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import charactersReducer from "./slices/charactersSlice";
import gameRoomReducer from "./slices/gameRoomSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    characters: charactersReducer,
    gameRoom: gameRoomReducer,
  },
});

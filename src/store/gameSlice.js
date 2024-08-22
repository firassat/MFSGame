import { createSlice } from "@reduxjs/toolkit";
import GameLevel from "../components/GameLevel";

const gamemodel = new GameLevel();
const initialState = {
  value:
    gamemodel[
      `level${
        typeof window !== "undefined" && window?.localStorage?.getItem("game")
      }`
    ](),
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGame: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGame } = gameSlice.actions;

export default gameSlice.reducer;

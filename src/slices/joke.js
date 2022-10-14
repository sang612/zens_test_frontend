import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data/data";

const initialState = {
  jokeList: data,
  jokePicked: [],
  listFromCookie: [],
};

const jokeSlice = createSlice({
  name: "joke",
  initialState,
  reducers: {
    changeJoke: (state, action) => {
      for (let i = 0; i < state.jokeList.length; i++) {
        for (let j = 0; j < state.listFromCookie.length; j++) {
          if (state.jokeList[i]?.id === state.listFromCookie[j]?.id) {
            state.jokeList.splice(i, 1);
          }
        }
      }

      state.jokePicked = state.jokeList[0];
    },

    getCookieArr: (state, action) => {
      state.listFromCookie = action.payload;
    },
  },
});

export default jokeSlice.reducer;
export const { changeJoke, getCookieArr } = jokeSlice.actions;

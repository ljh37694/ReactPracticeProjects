import { createSlice } from "@reduxjs/toolkit";

export const favoriteCafeListSlice = createSlice({
  name: "favoriteCafeList",
  initialState: {
    value: [],
  },
  reducers: {
    setFavoriteCafeList: (state, action) => {
      state.value = [...action.payload];
    },
    pushFavoriteCafe: (state, action) => {
      state.value.push(action.payload);
    }
  },
});

export const { setFavoriteCafeList, pushFavoriteCafe } = favoriteCafeListSlice.actions;

export default favoriteCafeListSlice.reducer;
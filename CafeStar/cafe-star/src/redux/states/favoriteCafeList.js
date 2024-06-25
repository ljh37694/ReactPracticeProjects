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
      if (state.value.findIndex(item => item.id === action.payload.id) === -1) {
        state.value = [...state.value, action.payload];
      }
    },
    removeFavoriteCafe: (state, action) => {
      const copyList = [...state.value];
      copyList.splice((item) => item.id === action.payload.id, 1);

      state.value = copyList;
    },
  },
});

export const { setFavoriteCafeList, pushFavoriteCafe, removeFavoriteCafe } = favoriteCafeListSlice.actions;

export default favoriteCafeListSlice.reducer;
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
        state.value = [action.payload, ...state.value];
      }
    },
    removeFavoriteCafe: (state, action) => {
      const copyList = [...state.value];
      
      state.value = copyList.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { setFavoriteCafeList, pushFavoriteCafe, removeFavoriteCafe } = favoriteCafeListSlice.actions;

export default favoriteCafeListSlice.reducer;
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
        fetch('http://localhost:5000/favorite-cafes/push', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(action.payload),
        });
      }
    },
    removeFavoriteCafe: (state, action) => {
      if (state.value.findIndex(item => item.id === action.payload.id) !== -1) {
        fetch('http://localhost:5000/favorite-cafes/delete?id=' + action.payload.id, {
          method: "DELETE",
        });
      }
    },
  },
});

export const { setFavoriteCafeList, pushFavoriteCafe, removeFavoriteCafe } = favoriteCafeListSlice.actions;

export default favoriteCafeListSlice.reducer;
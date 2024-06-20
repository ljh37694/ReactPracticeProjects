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
      fetch('http://localhost:5000/favorite-cafes/push', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      })
        .then((response) => response.json())
        .then(data => state.value.push(data));
    },
    removeFavoriteCafe: (state, action) => {
      state.value = state.value.splice(state.value.findIndex(item => item.id === action.payload), 1);

      fetch('http://localhost:5000/favorite-cafes/delete?id=' + action.payload, {
        method: "DELETE",
      })
      .then((response) => response.json())
      .then(data => console.log(data));
    },
  },
});

export const { setFavoriteCafeList, pushFavoriteCafe, removeFavoriteCafe } = favoriteCafeListSlice.actions;

export default favoriteCafeListSlice.reducer;
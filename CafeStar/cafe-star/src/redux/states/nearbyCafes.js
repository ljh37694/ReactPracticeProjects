import { createSlice } from "@reduxjs/toolkit";

export const nearbyCafesSlice = createSlice({
  name: "nearbyCafes",
  initialState: {
    value: [],
  },
  reducers: {
    setnearbyCafes: (state, action) => {
      state.value = [...action.payload];
    },
  },
});

export const { setnearbyCafes } = nearbyCafesSlice.actions;

export default nearbyCafesSlice.reducer;
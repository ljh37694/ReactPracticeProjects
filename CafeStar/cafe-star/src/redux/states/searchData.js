import { createSlice } from "@reduxjs/toolkit";

export const searchDataSlice = createSlice({
  name: "searchData",
  initialState: {
    value: [],
  },
  reducers: {
    setsearchData: (state, action) => {
      state.value = [...action.payload];
    },
  },
});

export const { setsearchData } = searchDataSlice.actions;

export default searchDataSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const rateAverageListSlice = createSlice({
  name: "rateAverageList",
  initialState: {
    value: [],
  },
  reducers: {
    setRateAverageList: (state, action) => {
      state.value = [...action.payload];
    },
  },
});

export const { setRateAverageList } = rateAverageListSlice.actions;

export default rateAverageListSlice.reducer;
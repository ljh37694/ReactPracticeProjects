import { createSlice } from "@reduxjs/toolkit";

export const myReviewListSlice = createSlice({
  name: "myReviewList",
  initialState: {
    value: [],
  },
  reducers: {
    setMyReviewList: (state, action) => {
      state.value = [...action.payload];
    },
  },
});

export const { setMyReviewList } = myReviewListSlice.actions;

export default myReviewListSlice.reducer;
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
    isEvaluated: (state, action) => {
      const answer = state.value.find(review => review['user_id'] === action.payload);

      if (answer) {
        return true;
      } else {
        return false;
      }
    },
  },
});

export const { setMyReviewList, isEvaluated } = myReviewListSlice.actions;

export default myReviewListSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const currentMenuSlice = createSlice({
  name: "currentMenu",
  initialState: {
    value: 0,
  },
  reducers: {
    setcurrentMenu: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setcurrentMenu } = currentMenuSlice.actions;

export default currentMenuSlice.reducer;
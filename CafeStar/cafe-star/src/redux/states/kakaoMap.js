import { createSlice } from "@reduxjs/toolkit";

export const kakaoMapSlice = createSlice({
  name: "kakaoMap",
  initialState: {
    value: null,
  },
  reducers: {
    setKakaoMap: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setKakaoMap: setKakaoMap } = kakaoMapSlice.actions;

export default kakaoMapSlice.reducer;
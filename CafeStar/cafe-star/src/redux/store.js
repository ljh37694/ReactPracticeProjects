import { configureStore } from "@reduxjs/toolkit";
import searchData from "./states/searchData";
import kakaoMap from "./states/kakaoMap";

export const store = configureStore({
  reducer: { 
    searchData: searchData,
    kakaoMap: kakaoMap,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({
    serializableCheck: false,
  })
});
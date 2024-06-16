import { configureStore } from "@reduxjs/toolkit";
import cafeList from "./states/cafeList";
import kakaoMap from "./states/kakaoMap";
import currentMenu from "./states/currentMenu";

export const store = configureStore({
  reducer: { 
    cafeList: cafeList,
    kakaoMap: kakaoMap,
    currentMenu: currentMenu,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({
    serializableCheck: false,
  })
});
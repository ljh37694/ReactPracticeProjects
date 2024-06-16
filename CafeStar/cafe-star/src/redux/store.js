import { configureStore } from "@reduxjs/toolkit";
import cafeList from "./states/cafeList";
import kakaoMap from "./states/kakaoMap";
import currentMenu from "./states/currentMenu";
import favoriteCafeList from "./states/favoriteCafeList";

export const store = configureStore({
  reducer: { 
    cafeList: cafeList,
    kakaoMap: kakaoMap,
    currentMenu: currentMenu,
    favoriteCafeList: favoriteCafeList,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({
    serializableCheck: false,
  })
});
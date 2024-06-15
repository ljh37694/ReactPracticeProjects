import { configureStore } from "@reduxjs/toolkit";
import searchData from "./states/searchData";
import kakaoMap from "./states/kakaoMap";
import nearbyCafes from "./states/nearbyCafes";
import currentMenu from "./states/currentMenu";

export const store = configureStore({
  reducer: { 
    searchData: searchData,
    kakaoMap: kakaoMap,
    nearbyCafes: nearbyCafes,
    currentMenu: currentMenu,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({
    serializableCheck: false,
  })
});
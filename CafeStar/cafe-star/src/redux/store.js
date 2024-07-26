import { configureStore } from "@reduxjs/toolkit";
import cafeList from "./states/cafeList";
import kakaoMap from "./states/kakaoMap";
import currentMenu from "./states/currentMenu";
import favoriteCafeList from "./states/favoriteCafeList";
import isLoggedIn from "./states/isLoggedIn";
import userData from "./states/userData";
import myReviewList from "./states/myReviewList";

export const store = configureStore({
  reducer: {
    cafeList: cafeList,
    kakaoMap: kakaoMap,
    currentMenu: currentMenu,
    favoriteCafeList: favoriteCafeList,
    isLoggedIn: isLoggedIn,
    userData: userData,
    myReviewList: myReviewList,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({
    serializableCheck: false,
  })
});
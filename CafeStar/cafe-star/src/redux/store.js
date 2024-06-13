import { configureStore } from "@reduxjs/toolkit";
import searchData from "./states/searchData";

export const store = configureStore({
  reducer: { 
    searchData: searchData,
  },
});
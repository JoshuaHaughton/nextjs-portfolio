import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal";
import darkModeReducer from "./darkMode";

//Redux store that hosts all 3 reducer slices
const store = configureStore({
  reducer: {modal: modalReducer, darkMode: darkModeReducer}
});


export default store;

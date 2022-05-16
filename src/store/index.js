import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal";

//Redux store that hosts all 3 reducer slices
const store = configureStore({
  reducer: {modal: modalReducer}
});


export default store;

import { createSlice } from "@reduxjs/toolkit";


const initialDarkModeState = { showDarkMode: false };

//Dark Mode Reducers
const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: initialDarkModeState,
  reducers: {
    toggleDarkMode(state) {
      state.showDarkMode = !state.showDarkMode
    }
  },
});

export const darkModeActions = darkModeSlice.actions;
export default darkModeSlice.reducer;

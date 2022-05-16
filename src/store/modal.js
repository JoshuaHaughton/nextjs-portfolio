import { createSlice } from "@reduxjs/toolkit";


const initialModalState = { showModal: false };

//Cart Reducers
const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    toggleModal(state) {
      state.showModal = !state.showModal
    },
    closeModal(state) {
      state.showModal = false
    }
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;

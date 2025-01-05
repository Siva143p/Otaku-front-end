import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

const formSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export const selectEmail = (state) => state.form.email;
export const { setEmail } = formSlice.actions;
export default formSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: {
    value: {
      email: "",
      password: "",
    },
  },
  reducers: {
    rememberCredentials: (state, action) => {
      if (!action.payload) return;
      state.value = action.payload;
    },
  },
});

export const {rememberCredentials} = auth.actions
export default auth.reducer
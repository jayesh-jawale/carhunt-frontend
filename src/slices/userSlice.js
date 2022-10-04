import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isAuth: false,
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userPending: (state) => {
      state.isLoading = true;
    },
    userSuccess: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = "";
    },
    userFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = userSlice;

export const { userPending, userSuccess, userFail } = actions;

export default reducer;

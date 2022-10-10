import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetailsProfile: [],
  success: true,
  isAuth: false,
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "userUpdateDetails",
  initialState,
  reducers: {
    userUpdatePending: (state) => {
      state.isLoading = true;
    },
    userUpdateSuccess: (state, action) => {
      state.isLoading = false;
      state.success= true;
      state.userDetailsProfile = action.payload;
      state.error = "";
    },
    userUpdateFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    userUpdateReset: (state, action) => {
      state.userDetailsProfile = {}
    }
  },
});

const { reducer, actions } = userSlice;

export const { userUpdatePending, userUpdateSuccess, userUpdateFail, userUpdateReset } = actions;

export default reducer;

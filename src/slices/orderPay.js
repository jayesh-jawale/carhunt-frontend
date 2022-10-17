import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  success: false,
  error: "",
};

const cartSlice = createSlice({
  name: "orderPay",
  initialState,
  reducers: {
    orderPayLoading: (state) => {
      state.isLoading = true;
    },
    orderPaySuccess(state, action) {
      state.isLoading = false;
      state.success = true
    },
    orderPayFail: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = cartSlice;

export const { orderPayLoading, orderPaySuccess, orderPayFail } = actions;

export default reducer;

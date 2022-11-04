import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  isLoading: false,
  success: false,
  error: "",
};

const orderListSlice = createSlice({
  name: "ordersList",
  initialState,
  reducers: {
    orderListLoading: (state) => {
      state.isLoading = true;
    },
    orderListSuccess(state, action) {
      state.isLoading = false;
      state.orders = action.payload;
      state.success = true
    },
    orderListFail: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = orderListSlice;

export const { orderListLoading, orderListSuccess, orderListFail } = actions;

export default reducer;

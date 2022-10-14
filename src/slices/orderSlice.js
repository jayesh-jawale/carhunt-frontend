import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderItems: [],
  isLoading: false,
  error: "",
};

const cartSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrderLoading: (state) => {
      state.isLoading = true;
    },
    addOrderSuccess(state, action) {
      state.isLoading = false;
      state.orderItems = action.payload;
    },
    addOrderFail: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = cartSlice;

export const { addOrderLoading, addOrderSuccess, addOrderFail } = actions;

export default reducer;

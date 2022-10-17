import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  finalOrderDetails: [],
  isLoading: false,
  error: "",
};

const cartSlice = createSlice({
  name: "finalOrders",
  initialState,
  reducers: {
    finalOrderLoading: (state) => {
      state.isLoading = true;
    },
    finalOrderSuccess(state, action) {
      state.isLoading = false;
      state.finalOrderDetails = action.payload;
    },
    finalOrderFail: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = cartSlice;

export const { finalOrderLoading, finalOrderSuccess, finalOrderFail } = actions;

export default reducer;

import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    users: [],
    isAuth: false,
    isLoading: false,
    error: ""
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
      loginPending: (state) => {
        state.isLoading = true;
      },
      loginSuccess: (state, {payload}) => {
        state.isLoading = false;
        state.isAuth = true;
        state.users = payload;
        state.error = "";
      },
      loginFail: (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      },
    },
  });

const {reducer, actions} = loginSlice;

export const {
    loginPending,
    loginSuccess,
    loginFail,
} = actions;

export default reducer;
import axios from "axios";
import { loginPending, loginSuccess, loginFail } from "../slices/loginSlice";
import { userProfile } from "./userAction";

import URL from "../url.json"

export const userLogin = (userDetails) => async (dispatch) => {
  dispatch(loginPending());
  try {
    const result = await axios.post(`${URL.REACT_APP_API_URL}/login`, userDetails);
    dispatch(loginSuccess(result.data));

    if (result.data.status === "success") {
      sessionStorage.setItem("token", result.data.token);
      localStorage.setItem("userInfo", JSON.stringify(result.data));
    }
    dispatch(userProfile());
  } catch (error) {
    dispatch(loginFail(error.message));
  }
};
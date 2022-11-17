import axios from "axios";
import { loginPending, loginSuccess, loginFail } from "../slices/loginSlice";
import { userProfile } from "./userAction";
import { API_URL } from "../apiURL";

export const userLogin = (userDetails) => async (dispatch) => {
  dispatch(loginPending());
  try {
    const result = await axios.post(`${API_URL}/login`, userDetails);
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
import axios from "axios";
import { loginPending, loginSuccess, loginFail } from "../slices/loginSlice";

export const userLogin = (userDetails) => async (dispatch) => {
    dispatch(loginPending());
    try {
      const result = await axios.post("http://localhost:9000/login", userDetails);
      dispatch(loginSuccess(result))

      if(result.data.status === "success") {
        sessionStorage.setItem('token', result.data.token);
        localStorage.setItem("userInfo", JSON.stringify(result.data))
      }
    } catch (error) {
      dispatch(loginFail(error.message));
    }
  };
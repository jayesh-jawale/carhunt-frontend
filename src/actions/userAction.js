import axios from "axios";
import { userPending, userSuccess, userFail } from "../slices/userSlice";

export const userProfile = () => async (dispatch) => {
  dispatch(userPending());
  try {
    const token = sessionStorage.getItem("token");
    const result = await axios.get("https://carhunt-backend.vercel.app/v1/user", {
      headers: {
        Authorization: token,
      },
    });
    dispatch(userSuccess(result.data));
  } catch (error) {
    dispatch(userFail(error.message));
  }
};

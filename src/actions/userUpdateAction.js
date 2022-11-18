import axios from "axios";
import { userUpdatePending, userUpdateSuccess, userUpdateFail } from "../slices/userUpdateProfile";

export const userUpdateProfile = (details) => async (dispatch) => {
  dispatch(userUpdatePending());
  try {
    const token = sessionStorage.getItem("token");
    const result = await axios.put(`${process.env.REACT_APP_API_URL}/v1/user`, details, {
      headers: {
        Authorization: token,
      },
    });
    dispatch(userUpdateSuccess(result.data));
  } catch (error) {
    dispatch(userUpdateFail(error.message));
  }
};

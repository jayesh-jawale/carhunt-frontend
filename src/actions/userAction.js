import axios from "axios";
import { userPending, userSuccess, userFail } from "../slices/userSlice";
import { API_URL } from "../apiURL";

export const userProfile = () => async (dispatch) => {
  dispatch(userPending());
  try {
    const token = sessionStorage.getItem("token");
    const result = await axios.get(`${API_URL}/v1/user`, {
      headers: {
        Authorization: token,
      },
    });
    dispatch(userSuccess(result.data));
  } catch (error) {
    dispatch(userFail(error.message));
  }
};

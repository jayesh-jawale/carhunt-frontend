import {
  addOrderSuccess,
  addOrderFail,
  addOrderLoading,
} from "../slices/orderSlice";
import axios from "axios";

export const orderCre = (data) => async (dispatch) => {
  dispatch(addOrderLoading());
  try {
    const token = sessionStorage.getItem("token");
    const result = await axios.post("http://localhost:9000/api/orders", data, {
      headers: {
        Authorization: token,
      },
    });

    dispatch(addOrderSuccess(result.data));
  } catch (error) {
    dispatch(addOrderFail(error.message));
  }
};

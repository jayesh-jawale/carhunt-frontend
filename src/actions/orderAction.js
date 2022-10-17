import {
  addOrderSuccess,
  addOrderFail,
  addOrderLoading,
} from "../slices/orderSlice";
import {
  finalOrderLoading,
  finalOrderSuccess,
  finalOrderFail,
} from "../slices/finalOrderSlice";
import {
  orderPayLoading,
  orderPaySuccess,
  orderPayFail,
} from "../slices/orderPay";
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

export const getFinalOrderDetails = (_id) => async (dispatch) => {
  dispatch(finalOrderLoading());
  try {
    const token = sessionStorage.getItem("token");
    const result = await axios.get(`http://localhost:9000/api/orders/${_id}`, {
      headers: {
        Authorization: token,
      },
    });
    dispatch(finalOrderSuccess(result.data));
  } catch (error) {
    dispatch(finalOrderFail(error.message));
  }
};

export const orderPayDetails = (_id, paymentResult) => async (dispatch) => {
  dispatch(orderPayLoading());
  try {
    const token = sessionStorage.getItem("token");
    const result = await axios.put(
      `http://localhost:9000/api/orders/${_id}/pay`,
      paymentResult,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    dispatch(orderPaySuccess(result.data));
  } catch (error) {
    dispatch(orderPayFail(error.message));
  }
};

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
import {
  orderListLoading,
  orderListSuccess,
  orderListFail,
} from "../slices/orderListSlice";
import axios from "axios";

export const orderCre = (data) => async (dispatch) => {
  dispatch(addOrderLoading());
  try {
    const token = sessionStorage.getItem("token");
    const result = await axios.post("https://carhunt-backend.vercel.app/api/orders", data, {
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
    const result = await axios.get(`https://carhunt-backend.vercel.app/api/orders/${_id}`, {
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
      `https://carhunt-backend.vercel.app/api/orders/${_id}/pay`,
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

export const orderListDetails = () => async (dispatch) => {
  dispatch(orderListLoading());
  try {
    const token = sessionStorage.getItem("token");
    const result = await axios.get("https://carhunt-backend.vercel.app/api/order/myorders", {
      headers: {
        Authorization: token,
      },
    });
    dispatch(orderListSuccess(result.data));
  } catch (error) {
    dispatch(orderListFail(error.message));
  }
};

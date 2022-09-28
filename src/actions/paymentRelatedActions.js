import { shippingAddress } from "../slices/cartSlice"
import { paymentMethod } from "../slices/cartSlice"

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch(shippingAddress(data))
  
    localStorage.setItem('shippingAddress', JSON.stringify(data))
  }

  export const savePaymentMethod = (data) => (dispatch) => {
    dispatch(paymentMethod(data))
  
    localStorage.setItem("paymentMethod", JSON.stringify(data));
}
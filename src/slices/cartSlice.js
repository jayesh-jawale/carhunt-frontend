import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  shippinngAddress: {},
  shippingPrice: [],
  taxPrice: "",
  finalTotalAmount: "",
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  isLoading: false,
  error: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartLoading: (state) => {
      state.isLoading = true;
    },
    addToCartSuccess(state, action) {
      // Find index if it is already present
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        state.cartItems.push({ ...action.payload, cartQuantity: 1 });
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      // If item is greater than 1 then we need to decrease the item
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        // We will remove entire car added from list
        const removeEntireItem = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );

        state.cartItems = removeEntireItem;

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state) {
      // Reduce contains 2 paramters, 1st is callback function and 2nd one can be number, object or array.
      // cartTotal will contain 2nd param of reduce method which we will pass as let {total, quantity}
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          // Destructuring price and cartQuantity
          const { price, cartQuantity } = cartItem;
          // Get total of specific cart added
          const cartItemTotal = price * cartQuantity;

          cartTotal.total += cartItemTotal; // Get total of specific cart
          cartTotal.quantity += cartQuantity; // Get total quantity

          return cartTotal;
        },
        // 2nd parameter which is object
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
      state.shippingPrice = total > 100 ? 0.00 : 100
      state.taxPrice = Number((0.15 * total).toFixed(2))
      state.finalTotalAmount = state.cartTotalAmount + state.shippingPrice + state.taxPrice
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
    addToCartFail: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    shippingAddress: (state, action) => {
      state.shippinngAddress = action.payload
    },
    paymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

const { reducer, actions } = cartSlice;

export const {
  addToCartLoading,
  addToCartSuccess,
  removeFromCart,
  getTotals,
  addToCartFail,
  clearCart,
  shippingAddress,
  paymentMethod,
} = actions;

export default reducer;

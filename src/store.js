import {configureStore} from "@reduxjs/toolkit";
import marutiSuzukiCarReducer from "./slices/carSlice"
import userRegistrationReducer from "./slices/userRegistrationSlice"
import loginReducer from "./slices/loginSlice"
import cartReducer from "./slices/cartSlice"
import userReducer from "./slices/userSlice"
import userUpdateReducer from "./slices/userUpdateProfile"
import orderReducer from "./slices/orderSlice"

const store = configureStore({
    reducer: {
        marutiSuzukiCar: marutiSuzukiCarReducer,
        userRegistration: userRegistrationReducer,
        login: loginReducer,
        cart: cartReducer,
        user: userReducer,
        userUpdateDetails: userUpdateReducer,
        orders: orderReducer
    }
})

export default store;
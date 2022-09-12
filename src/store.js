import {configureStore} from "@reduxjs/toolkit";
import marutiSuzukiCarReducer from "./slices/carSlice"
import userRegistrationReducer from "./slices/userRegistrationSlice"
import loginReducer from "./slices/loginSlice"

const store = configureStore({
    reducer: {
        marutiSuzukiCar: marutiSuzukiCarReducer,
        userRegistration: userRegistrationReducer,
        login: loginReducer
    }
})

export default store;
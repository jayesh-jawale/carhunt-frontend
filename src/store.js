import {configureStore} from "@reduxjs/toolkit";
import marutiSuzukiCarReducer from "./slices/carSlice"

const store = configureStore({
    reducer: {
        marutiSuzukiCar: marutiSuzukiCarReducer,
    }
})

export default store;
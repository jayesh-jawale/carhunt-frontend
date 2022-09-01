import {configureStore} from "@reduxjs/toolkit";
import marutiSuzukiCarReducer from "./slices/marutiSuzukiCarSlice"

const store = configureStore({
    reducer: {
        marutiSuzukiCar: marutiSuzukiCarReducer,
    }
})

export default store;
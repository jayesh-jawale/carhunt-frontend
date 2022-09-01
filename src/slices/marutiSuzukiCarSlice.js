import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    cars: [],
    fetchSingleCar: [],
    isLoading: false,
    error: ""
}

const marutiSuzukiCarSlice = createSlice({
    name: "marutiSuzukiCar",
    initialState,
    reducers: {
        fetchCarLoading: (state) => {
            state.isLoading = true;
        },
        fetchCarSuccess: (state, action) => {
            state.cars = action.payload;
            state.isLoading = false;
        },
        fetchCarFail: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        fetchSingleCarLoading: (state) => {
            state.isLoading = true;
        },
        fetchSingleCarSuccess: (state, action) => {
            state.fetchSingleCar = action.payload;
            state.isLoading = false;
        },
        fetchSingleCarFail: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
})

const {reducer, actions} = marutiSuzukiCarSlice;

export const {
    fetchCarLoading,
    fetchCarSuccess,
    fetchCarFail,
    fetchSingleCarLoading,
    fetchSingleCarSuccess,
    fetchSingleCarFail
} = actions;

export default reducer;
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    cars: [],
    fetchSingleCar: [],
    searchSingleCar: [],
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
            state.searchSingleCar = action.payload;
            state.isLoading = false;
        },
        fetchCarFail: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        searchCars: (state, action) => {
                state.searchSingleCar = state.cars.filter((searchCar) => {
                    if(!action.payload)
                    return searchCar;
    
                    return searchCar.name.toLowerCase().includes(action.payload.toLowerCase());
                })
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
    searchCars,
    fetchSingleCarLoading,
    fetchSingleCarSuccess,
    fetchSingleCarFail
} = actions;

export default reducer;
import axios from "axios";
import {
  fetchCarLoading,
  fetchCarSuccess,
  fetchCarFail,
  fetchSingleCarLoading,
  fetchSingleCarSuccess,
  fetchSingleCarFail,
} from "../slices/marutiSuzukiCarSlice";

const getCarsURL = "http://localhost:9000/get-cars/";

export const fetchMarutiSuzukiCars = () => async (dispatch) => {
  dispatch(fetchCarLoading());
  try {
    const result = await axios.get(getCarsURL);
    dispatch(fetchCarSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchCarFail(error.message));
  }
};

export const fetchSingleMarutiSuzukiCar = (_id) => async (dispatch) => {
  dispatch(fetchSingleCarLoading());
  try {
    const result = await axios.get(getCarsURL + _id);
    dispatch(fetchSingleCarSuccess(result.data.data.length && result.data.data[0]));
  } catch (error) {
    dispatch(fetchSingleCarFail(error.message));
  }
};

import axios from "axios";
import {
  fetchCarLoading,
  fetchCarSuccess,
  fetchCarFail,
  searchCars,
  fetchSingleCarLoading,
  fetchSingleCarSuccess,
  fetchSingleCarFail,
} from "../slices/carSlice";

const getCarsURL = `${process.env.REACT_APP_API_URL}/get-cars/`;

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
    dispatch(
      fetchSingleCarSuccess(result.data.data.length && result.data.data[0])
    );
  } catch (error) {
    dispatch(fetchSingleCarFail(error.message));
  }
};

export const filterSearchCars = (searchTerm) => async (dispatch) => {
  dispatch(fetchSingleCarLoading());
  try {
    await axios.get(`${process.env.REACT_APP_API_URL}/get-cars/car?name=${searchTerm}`);
    dispatch(searchCars(searchTerm));
  } catch (error) {
    dispatch(fetchSingleCarFail(error.message));
  }
};

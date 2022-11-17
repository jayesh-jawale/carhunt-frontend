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
import {API_URL} from "../apiURL"

const getCarsURL = `${API_URL}/get-cars/`;

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
    await axios.get(`${API_URL}/get-cars/car?name=${searchTerm}`);
    dispatch(searchCars(searchTerm));
  } catch (error) {
    dispatch(fetchSingleCarFail(error.message));
  }
};

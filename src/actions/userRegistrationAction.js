import axios from "axios";
import { registrationPending, registrationSuccess, registrationError } from "../slices/userRegistrationSlice.js";
import { API_URL } from "../apiURL.js";

export const userRegistration = (registrationData) => async (dispatch) => {
    dispatch(registrationPending());
    try {
      const result = await axios.post(`${API_URL}/register`, registrationData);
      result.data.status === "success" ? 
      dispatch(registrationSuccess(result.data.message)) :
      dispatch(registrationError(result.data.message));
    } catch (error) {
      dispatch(registrationError(error.message));
    }
  };
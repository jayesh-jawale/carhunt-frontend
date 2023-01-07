import axios from "axios";
import { registrationPending, registrationSuccess, registrationError } from "../slices/userRegistrationSlice.js";

export const userRegistration = (registrationData) => async (dispatch) => {
    dispatch(registrationPending());
    try {
      const result = await axios.post("https://carhunt-backend.vercel.app/register", registrationData);
      result.data.status === "success" ? 
      dispatch(registrationSuccess(result.data.message)) :
      dispatch(registrationError(result.data.message));
    } catch (error) {
      dispatch(registrationError(error.message));
    }
  };
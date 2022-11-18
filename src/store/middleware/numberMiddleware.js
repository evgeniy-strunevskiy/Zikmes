import axios from "axios";
import { numberFetching, numberFetchingError, numberFetchingSucces } from "../slices/numberSlice";

export const numberMiddleware = (tel) => async(disptach) => {
  try {
    disptach(numberFetching())
    const response = await axios.post('http://localhost:3000/numbers', tel);
    disptach(numberFetchingSucces(response.status))
  } catch (error) {
    disptach(numberFetchingError(error.message))
  }
}
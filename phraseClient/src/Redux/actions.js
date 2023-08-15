import axios from "axios";
import { GET_PHRASE } from "./action-types";
const URL = `http://localhost:3001/phrase`;

export const getPhrase = (idPhrase) => {
  return async function (dispatch) {
    const responseBdd = (await axios.get(`${URL}/${idPhrase}`)).data;
    dispatch({
      type: GET_PHRASE,
      payload: responseBdd,
    });
  };
};

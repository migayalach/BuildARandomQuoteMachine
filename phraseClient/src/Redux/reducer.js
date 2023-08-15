import { GET_PHRASE } from "./action-types";

const initialState = {
  phrase: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PHRASE:
      return {
        ...state,
        phrase: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;

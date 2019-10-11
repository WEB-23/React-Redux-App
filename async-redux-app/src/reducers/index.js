import { FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILURE } from "../actions";

const initialState = {
  data: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };

    case FETCHING_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false
      };

    case FETCHING_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };

    default:
      return {
        ...state
      };
  }
};

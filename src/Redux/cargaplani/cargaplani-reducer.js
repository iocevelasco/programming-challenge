import {
  CREATE_PLANI_FAIL,
  FETCH_PLANI_SUCCESS,
  FETCH_PLANI_FAIL,
  FETCH_PLANI_START,
  CLEAR_ERROR,
} from "./orders-types";

const INITIAL_STATE = {
  orders: null,
  loading: false,
  error: null,
};

const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_PLANI_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_PLANI_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        orders: [...action.payload],
      };
    case FETCH_PLANI_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_PLANI_START:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default ordersReducer;

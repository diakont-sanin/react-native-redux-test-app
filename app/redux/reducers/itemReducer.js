import {
  FETCHING_REQUEST,
  FETCHING_FAIL,
  FETCHING_SUCCESS,
} from '../actions/types';

const initialState = {
  isFetching: false,
  errorMessage: '',
  items: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_REQUEST:
      return {...state, isFetching: true};
    case FETCHING_FAIL:
      return {...state, isFetching: false, errorMessage: action.payload};
    case FETCHING_SUCCESS:
      return {...state, isFetching: false, items: action.payload};
    default:
      return state;
  }
};

export default itemReducer;

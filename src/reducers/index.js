import { combineReducers } from 'redux';
import {
  FETCH_CITY,
  CITY_DATA,
  ERROR,
} from '../actions/types';

const dataState = {
  cities: [],
  citiesByCode: {},
  loading: false,
  error: '',
};

const dataReducer = (stateObj = dataState, action) => {
  let state = stateObj;
  let citiesByCode;
  switch (action.type) {
    case FETCH_CITY:
      state = { ...state, loading: true, error: '' };
      return state;
    case CITY_DATA:
      citiesByCode = { ...state.citiesByCode, [action.payload.code]: action.payload };
      state = {
        ...state,
        cities: Object.values(citiesByCode),
        citiesByCode,
        loading: false,
      };
      return state;
    case ERROR:
      state = { ...state, loading: false, error: action.payload.message };
      return state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dataReducer,
});

export default rootReducer;

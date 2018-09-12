import { combineReducers } from 'redux';
import {
  FETCH_CITY,
  ADD_CITY,
  ERROR,
  UPDATE_CITY,
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
    case ADD_CITY:
      citiesByCode = { ...state.citiesByCode, [action.payload.code]: action.payload };
      state = {
        ...state,
        cities: Object.values(citiesByCode),
        citiesByCode,
        loading: false,
      };
      return state;
    case UPDATE_CITY:
      // eslint-disable-next-line no-case-declarations
      const { [action.payload.code]: omit, ...cities } = state.citiesByCode;
      citiesByCode = { ...cities, [action.payload.city.code]: action.payload.city };
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

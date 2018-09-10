import { combineReducers } from 'redux';
import {
  FETCH_CITY,
  CITY_DATA
} from '../actions/types';

const dataState = {
  cities: [], loading: false, error: null,
};

const dataReducer = (state = dataState, action) => {
  console.log(action)

  switch (action.type) {
    case FETCH_CITY:
      state = { ...state, loading: true };
      return state;
    case CITY_DATA:
      state = { ...state, cities: [...state.cities, action.payload], loading: false };
      console.log(state)
      return state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dataReducer,
});

export default rootReducer;

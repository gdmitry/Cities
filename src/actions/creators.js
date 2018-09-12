import {
  FETCH_CITY, ADD_CITY, ERROR, UPDATE_CITY,
} from './types';
import requestCity from '../services/api';

function fetchCity(code) {
  return (dispatch) => {
    dispatch({ type: FETCH_CITY, payload: { code } });
    return requestCity(code).then(data => dispatch({ type: ADD_CITY, payload: { ...data, code } }))
      .catch(e => dispatch({ type: ERROR, payload: { message: e.message } }));
  };
}

function updateCity(codeToUpdate, codeToFetch) {
  return (dispatch) => {
    dispatch({ type: FETCH_CITY, payload: { code: codeToFetch } });
    return requestCity(codeToFetch).then(data => dispatch({
      type: UPDATE_CITY,
      payload: { code: codeToUpdate, city: { ...data, code: codeToFetch } },
    }))
      .catch(e => dispatch({ type: ERROR, payload: { message: e.message } }));
  };
}

export default {
  fetchCity,
  updateCity,
};

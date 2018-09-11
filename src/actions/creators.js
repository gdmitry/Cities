import { FETCH_CITY, CITY_DATA, ERROR } from './types';
import requestCity from '../services/api';

function fetchCity(code) {
  return (dispatch) => {
    dispatch({ type: FETCH_CITY, payload: { code } });
    return requestCity(code).then((data) => {
      const name = data['place name'];
      const state = data['state abbreviation'];
      return { state, name };
    }).then(data => dispatch({ type: CITY_DATA, payload: { ...data, code } }))
      .catch(e => dispatch({ type: ERROR, payload: { message: e.message } }));
  };
}

export default {
  fetchCity,
};

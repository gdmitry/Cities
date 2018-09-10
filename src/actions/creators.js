import { FETCH_CITY, CITY_DATA } from './types';
import requestCity from '../services/api';

export function fetchCity(code) {
  return (dispatch) => {
    dispatch({ type: FETCH_CITY, payload: { code } });
    return requestCity(code).then(data => {
      const name = data['place name'];
      const state = data['state abbreviation'];
      return { state, name };
    }).then(data => dispatch({ type: CITY_DATA, payload: { ...data, code } }));
  };
}

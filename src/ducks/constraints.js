import * as api from '../api'
import createPromiseReducer from '../misc/promiseReducer'
import createAction from '../misc/createAction'

export const GET_CONSTRAINTS_START = 'GET_CONSTRAINTS_START';
export const GET_CONSTRAINTS_ERROR = 'GET_CONSTRAINTS_ERROR';
export const GET_CONSTRAINTS_SUCCESS = 'GET_CONSTRAINTS_SUCCESS';

export function getConstraints() {
  const promise = api.getConstraints();
  return createAction('GET_CONSTRAINTS', {promise});
}

const initialState = {};

export default createPromiseReducer(initialState, [
  GET_CONSTRAINTS_START,
  GET_CONSTRAINTS_SUCCESS,
  GET_CONSTRAINTS_ERROR]);

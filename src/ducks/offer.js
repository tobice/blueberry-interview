import * as api from '../api'
import createPromiseReducer from '../misc/promiseReducer'
import createAction from '../misc/createAction'

export const GET_OFFER_START = 'GET_OFFER_START';
export const GET_OFFER_ERROR = 'GET_OFFER_ERROR';
export const GET_OFFER_SUCCESS = 'GET_OFFER_SUCCESS';

export function getOffer() {
  return (dispatch, getState) => {
    const { amount, term } = getState().form;
    const promise = api.getFirstLoanOffer(amount, term);
    dispatch(createAction('GET_OFFER', {promise}));
  }
}

const initialState = {};

export default createPromiseReducer(initialState, [
  GET_OFFER_START,
  GET_OFFER_SUCCESS,
  GET_OFFER_ERROR]);

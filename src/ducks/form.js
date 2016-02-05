import { Record } from 'immutable';
import createAction from '../misc/createAction'
import { GET_CONSTRAINTS_SUCCESS } from './constraints'

export const FORM_UPDATE = "FORM_UPDATE";

export function updateForm(values) {
  return createAction(FORM_UPDATE, values);
}

const InitialState = Record({
  amount: 0,
  term: 0
});
const initialState = InitialState();

export default (state = initialState, action) => {
  switch (action.type) {

    case FORM_UPDATE:
      return state.merge(action.payload);

    case GET_CONSTRAINTS_SUCCESS:
      return state
        .set('amount', action.payload.amountInterval.defaultValue)
        .set('term', action.payload.termInterval.defaultValue);
  }
  return state;
}

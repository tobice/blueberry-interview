import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import DevTools from '../containers/DevTools'
import thunk from 'redux-thunk'
// import api from '../middleware/api'
import createLogger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware';
import constraintsReducer from '../ducks/constraints'
import offerReducer from '../ducks/offer'
import formReducer from '../ducks/form'
import loadingReducer from '../ducks/loading'

const rootReducer = combineReducers({
  constraints: constraintsReducer,
  offer: offerReducer,
  form: formReducer,
  loading: loadingReducer
});

const finalCreateStore = compose(
  applyMiddleware(
    promiseMiddleware({promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR']}),
    thunk
  ),
  applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore);


export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  /*
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  */

  return store
}

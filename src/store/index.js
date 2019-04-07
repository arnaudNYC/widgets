import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';
import api from '../middleware/api';
import rootReducer from '../reducers';

const middleware = [thunk, api];

if (process.env.NODE_ENV === 'development') {
  middleware.push(reduxImmutableStateInvariant(), logger);
}

const enhancer = composeWithDevTools(applyMiddleware(...middleware));
const configureStore = initialState => {
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
};

const store = configureStore({});
export default store;

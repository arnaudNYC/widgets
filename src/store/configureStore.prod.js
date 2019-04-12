import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import api from '../middleware/api';
import rootReducer from '../reducers';

const middleware = [thunk, api];

const enhancer = compose(applyMiddleware(...middleware));
const configureStore = initialState => {
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
};

export default configureStore;

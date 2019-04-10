import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import store from './store';
import { loadWidgetsRequest } from './actions/widgetActions';

store.dispatch(loadWidgetsRequest());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

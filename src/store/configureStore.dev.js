import {applyMiddleware, createStore, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {history} from '../routes/history';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import Perf from 'react-addons-perf'

import rootReducer from '../reducers/rootReducer';

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history);

const logger = createLogger({
  // ...options
  options:{
    timestamp:true
  }
});

// Be sure to ONLY add this middleware in development!
const middlewares = [
  thunk,
  historyMiddleware,
  logger
];

const win = window;
win.Perf = Perf
const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

const configureStore = preloadedState => {
  const store = createStore(rootReducer, preloadedState, storeEnhancers);
  return store;
}
export default configureStore;

import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './history';
import configureStore from '../store/configureStore';
import {Router} from 'react-router'




const store = configureStore();

const Routes = () => (
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes}>
        {/* <MainRouter></MainRouter> */}
      </Router>
    </div>
  </Provider>
);

export default Routes;

/* eslint-disable new-cap */
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import App from './App';
import rootReducer from './redux/reducers';

// @ts-ignore
const store = new createStore(rootReducer, applyMiddleware(logger));

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

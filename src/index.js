import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import Routes from './routes/Routes';
import filterReducer from './reducers/filter';

/* eslint-disable no-underscore-dangle */
const store = createStore(filterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

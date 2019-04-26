import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ROUTER
import { BrowserRouter } from 'react-router-dom'

// REDUX
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

// MY MULTIPLE REDUCERS
import snackReducer from './Redux/SnackReducer'
import userReducer from './Redux/UserReducer'

// SETTING IT ALL UP
let rootReducer = combineReducers({snack: snackReducer, user: userReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
, document.getElementById('root'));

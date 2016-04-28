import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
// import { devTools } from 'redux-devtools';
// import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import { accts } from './reducers/accounts';

//Import Action Constants
import * as cons from './constants/index'

//Import React Component
import Datatable from './components/Datatable';


const reducer = combineReducers({accts:accts})

//Compose the middleware, redux DevTools, and apply the createStore Function
const finalCreateStore = compose(applyMiddleware(thunk))(createStore)

const store = finalCreateStore(reducer);


ReactDOM.render(
  <Provider store={store}>
      <div>
        <h1>Demo</h1>
        <Datatable />
      </div>
  </Provider>
    ,
  document.getElementById('container')
);

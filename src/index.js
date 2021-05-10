import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store, { persistor } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-xxl/dist/css/bootstrap.min.css';
import './css/w3.css';
import './css/index.css';

// const store = createStore(reducer);
ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

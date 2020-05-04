import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Beranda from './kontainer/Beranda';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// const inisialisasiStore = redux.createStore;

const globalState = {
  totalPesanan: 5
}

// Reducer
const rootReducer = (state = globalState, action) => {
  return state;
}

// Store
const iniStore = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={iniStore}>
      <Beranda/>   
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/reduxStore.js';
import {Provider} from 'react-redux';


let rerenderEntireTree = (store) => {
  ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
};

rerenderEntireTree(store);
reportWebVitals();

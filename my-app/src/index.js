import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/reduxStore.js';


let rerenderEntireTree = (store) => {
  ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root'));
};

store.subscribe(() => {
  rerenderEntireTree(store);
});

rerenderEntireTree(store);
reportWebVitals();

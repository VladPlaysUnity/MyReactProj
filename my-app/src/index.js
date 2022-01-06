import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './state.js';


let rerenderEntireTree = (store) => {
  ReactDOM.render(
  <React.StrictMode>
    <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
  </React.StrictMode>,
  document.getElementById('root'));
};

store.subscribe(rerenderEntireTree);

rerenderEntireTree(store);
reportWebVitals();

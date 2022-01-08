import {createStore, combineReducers} from "redux";
import profilePageReducer from './reducers/profilePageReducer.js';
import dialogsPageReducer from './reducers/dialogsPageReducer.js';
import sideBarReducer from './reducers/sideBarReducer.js';

let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  sideBar: sideBarReducer
});

let store = createStore(reducers);

export default store;

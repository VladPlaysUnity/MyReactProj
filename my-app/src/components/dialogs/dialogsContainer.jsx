import React from "react";
import Dialogs from './dialogs.jsx';
import {updateNewMessageTextActionCreator, addMessageActionCreator} from '../../redux/reducers/dialogsPageReducer.js'

const DialogsContainer = (props) =>{

  let updateNewMessageText = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  let sendMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  return (<Dialogs page={props.store.getState().dialogsPage} updateNewMessageText={updateNewMessageText} addMessage={sendMessage}/>);
};

export default DialogsContainer;

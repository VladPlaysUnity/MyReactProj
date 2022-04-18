import React from "react";
import Dialogs from './dialogs.jsx';
import {updateNewMessageTextActionCreator, addMessageActionCreator} from '../../redux/reducers/dialogsPageReducer.js';
import {connect} from 'react-redux';


let mapStateToProps = (state) =>{
  return {
    page: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch)=>{
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;

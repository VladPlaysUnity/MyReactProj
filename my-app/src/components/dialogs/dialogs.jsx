import React from "react";
import s from './dialogs.module.css';
import DialogName from './dialog_names/dialog_names.jsx';
import Message from './messages/messages.jsx'

const Dialogs = (props) =>{

  let newMessageElement = React.createRef();

  let dialog_items = props.state.dialogs.map(item => <DialogName id={item.id} name={item.name} img={item.img}/>);

  let message_components = props.state.messages.map(item => <Message cont={item.content}/>);

  let sendMessage = () =>{
    let text = newMessageElement.current.value;
    alert(text);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogNames}>
        {dialog_items}
      </div>
      <div className={s.messages}>
        {message_components}
      </div>
      <div className={s.message_sender_line}>
        <textarea ref={newMessageElement}></textarea>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;

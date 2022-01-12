import React from "react";
import s from './dialogs.module.css';
import DialogName from './dialog_names/dialog_names.jsx';
import Message from './messages/messages.jsx';

const Dialogs = (props) =>{

  let newMessageElement = React.createRef();

  let dialog_items = props.page.dialogs.map(item => <DialogName id={item.id} name={item.name} img={item.img}/>);

  let message_components = props.page.messages.map(item => <Message cont={item.content}/>);

  let updateNewMessageText = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  let sendMessage = () => {
    props.addMessage();
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogNames}>
        {dialog_items}
      </div>
      <div className={s.messages}>
        {message_components}
      </div>
      <div className={s.message_sender_line}>
        <textarea onChange={updateNewMessageText} ref={newMessageElement} value={props.page.newMessageText}/>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;

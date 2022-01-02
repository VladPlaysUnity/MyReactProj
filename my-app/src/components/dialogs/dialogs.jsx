import s from './dialogs.module.css';
import DialogName from './dialog_names/dialog_names.jsx';
import Message from './messages/messages.jsx'

const Dialogs = (props) =>{

  let dialog_items = props.dialogs.map(item => <DialogName id={item.id} name={item.name} />);

  let message_components = props.messages.map(item => <Message cont={item.content}/>)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogNames}>
        {dialog_items}
      </div>
      <div className={s.messages}>
        {message_components}
      </div>
    </div>
  );
};

export default Dialogs;

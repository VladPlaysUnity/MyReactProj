import s from './dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
  return (
    <div className={s.dialog}>
      <NavLink to={'/dialogs/' + props.id} className={ d => d.isActive ? s.active : s.item }>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) =>{
  return (
  <div className={s.message}>
    {props.cont}
  </div>
  );
};

const Dialogs = () =>{

  let dialogs = [
    {id: 1, name:"Sam"},
    {id: 2, name:"Max"},
    {id: 3, name:"Elisabeth"}
  ];

  let messages = [
    {id:1, content:"Message 1"},
    {id:2, content:"Message 2"},
    {id:3, content:"Message 3"}
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogNames}>
        <DialogItem id={dialogs[0].id} name={dialogs[0].name} />
        <DialogItem id={dialogs[1].id} name={dialogs[1].name} />
        <DialogItem id={dialogs[2].id} name={dialogs[2].name} />
      </div>
      <div className={s.messages}>
        <Message cont={messages[0].content}/>
        <Message cont={messages[1].content}/>
        <Message cont={messages[2].content}/>
      </div>
    </div>
  );
};

export default Dialogs;

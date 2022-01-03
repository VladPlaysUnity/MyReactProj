import s from './messages.module.css'

const Message = (props) =>{
  return (
  <div className={s.message}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/2048px-Circle-icons-gamecontroller.svg.png"/>
    <div className={s.content}>{props.cont}</div>
  </div>
  );
};

export default Message;

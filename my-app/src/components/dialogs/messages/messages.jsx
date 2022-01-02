import s from './messages.module.css'

const Message = (props) =>{
  return (
  <div className={s.message}>
    {props.cont}
  </div>
  );
};

export default Message;

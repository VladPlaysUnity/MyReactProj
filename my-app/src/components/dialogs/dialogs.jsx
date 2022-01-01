import s from './dialogs.module.css';

const Dialogs = () =>{
  return (
    <div className={s.dialogs}>
      <div className={s.dialogNames}>
        <div className={s.dialog}>Max</div>
        <div className={s.dialog}>John</div>
        <div className={s.dialog}>Elisabeth</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Message1</div>
        <div className={s.message}>Message2</div>
        <div className={s.message}>Message3</div>
      </div>
    </div>
  );
};

export default Dialogs;

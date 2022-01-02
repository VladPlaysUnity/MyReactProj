import {NavLink} from "react-router-dom";
import s from './dialog_names.module.css'

const DialogName = (props) =>{
  return (
    <div className={s.dialog_name}>
      <NavLink to={'/dialogs/' + props.id} className={s.link}>{props.name}</NavLink>
    </div>
  );
};

export default DialogName;

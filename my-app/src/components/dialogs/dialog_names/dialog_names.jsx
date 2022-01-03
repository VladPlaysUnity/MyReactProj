import {NavLink} from "react-router-dom";
import s from './dialog_names.module.css'

const DialogName = (props) =>{
  return (
    <div className={s.dialog_name}>
      <NavLink to={'/dialogs/' + props.id} className={ h => h.isActive ? s.active : s.link }>
        <img src={props.img}/>
        <div>{props.name}</div>
      </NavLink>
    </div>
  );
};

export default DialogName;

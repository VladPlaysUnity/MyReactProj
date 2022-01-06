import s from './friends.module.css';
import {NavLink} from "react-router-dom";

const Friends = (props) =>{
  
  let friends = props.friends.map(item => <div className={s.icon}><NavLink to={'/friends/' + item.name}><img src={item.img}/></NavLink></div>)

  return(
    <div className={s.friends}>
      <div className={s.tex}>Friends</div>
      <div className={s.icons}>
        {friends}
      </div>
    </div>
  );
};

export default Friends;

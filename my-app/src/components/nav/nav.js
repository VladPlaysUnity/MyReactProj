import s from './nav.module.css';
import Friends from './friends/friends.jsx'
import {NavLink} from "react-router-dom";

const Nav = (props) => {
  return(
  <nav className={s.nav}>
    <div><NavLink to="/profile" className={ navData => navData.isActive ? s.active : s.item }>Profile</NavLink></div>
    <div><NavLink to="/dialogs" className={ navData => navData.isActive ? s.active : s.item }>Messages</NavLink></div>
    <div><NavLink to="/news" className={ navData => navData.isActive ? s.active : s.item }>News</NavLink></div>
    <div><NavLink to="/music" className={ navData => navData.isActive ? s.active : s.item }>Music</NavLink></div>
    <div><br/></div>
    <div><NavLink to="/settings" className={ navData => navData.isActive ? s.active : s.item }>Settings</NavLink></div>
    <div><br/></div>
    <div><Friends friends={props.sideBar.friends}/></div>
  </nav>
);
};

export default Nav;

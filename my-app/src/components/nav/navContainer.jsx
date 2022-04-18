import Nav from "./nav.js";
import {connect} from 'react-redux';

let mapStateToProps = (state)=>{
  console.log(state.sideBar.friends)
  return {
    friends: state.sideBar.friends
  }
};
let mapDispatchToProps = (dispatch)=>{
  return{}
};


const NavContainer = connect(mapStateToProps,mapDispatchToProps)(Nav);

export default NavContainer;

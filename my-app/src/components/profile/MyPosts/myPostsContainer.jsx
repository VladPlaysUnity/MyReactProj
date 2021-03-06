import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/reducers/profilePageReducer.js';
import MyPosts from "./myposts.jsx";
import {connect} from 'react-redux';

let mapStateToProps = (state)=>{
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  }
}
let mapDispatchToProps = (dispatch)=>{
  return{
    updateNewPostText: (text)=>{
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: ()=>{
      dispatch(addPostActionCreator());
    }
  }
}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

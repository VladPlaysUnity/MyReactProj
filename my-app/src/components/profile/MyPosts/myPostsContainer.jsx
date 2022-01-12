import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/reducers/profilePageReducer.js';
import MyPosts from "./myposts.jsx";

const MyPostsContainer = (props) =>{

   let addPost = () =>{
     props.store.dispatch(addPostActionCreator());
   };

   let onPostChange = (text) =>{
     props.store.dispatch(updateNewPostTextActionCreator(text));
   };

  return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} newPostText={props.store.getState().profilePage.newPostText} posts={props.store.getState().profilePage.posts}/>);
};

export default MyPostsContainer;

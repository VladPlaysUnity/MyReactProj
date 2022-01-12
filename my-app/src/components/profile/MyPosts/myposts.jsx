import React from "react";
import s from './myposts.module.css';
import Post from './Post/post.jsx';

const MyPosts = (props) =>{

   let post_components = props.posts.map((post)=>{
     return (<Post message={post.message} />)
   });

   let newPostElement = React.createRef();

   let addPost = () =>{
     props.addPost();
   };

   let onPostChange = () =>{
     let text = newPostElement.current.value;
     props.updateNewPostText(text);
   };

  return (
    <div className={s.myposts}>
      My posts
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
      </div>
      <div>
        <button onClick={addPost}>Send</button>
      </div>
      <div className={s.posts}>
        {post_components}
      </div>
    </div>
  );
};

export default MyPosts;

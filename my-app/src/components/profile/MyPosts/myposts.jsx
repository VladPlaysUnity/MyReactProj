import s from './myposts.module.css';
import Post from './Post/post.jsx';

const MyPosts = (props) =>{
   let post_components = props.posts.map((post)=>{
     return (<Post message={post.message} />)
   });

  return (
    <div className={s.myposts}>
      My posts
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Send</button>
      </div>
      <div className={s.posts}>
        {post_components}
      </div>
    </div>
  );
};

export default MyPosts;

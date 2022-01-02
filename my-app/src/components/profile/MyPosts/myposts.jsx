import s from './myposts.module.css';
import Post from './Post/post.jsx';

const MyPosts = () =>{

   let posts = [
     {id:1, message:"Hi, how are you?"},
     {id:1, message:"Fine, what about you?"},
   ];

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
        <Post message={posts[0].message} />
        <Post message={posts[1].message} />
      </div>
    </div>
  );
};

export default MyPosts;

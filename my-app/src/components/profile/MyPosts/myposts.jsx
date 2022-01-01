import s from './myposts.module.css';
import Post from './Post/post.jsx';

const MyPosts = () =>{
  return (
    <div className={s.myposts}>
      My posts
      <div>
        <textarea id='ta'></textarea>
      </div>
      <div>
        <button> Send </button>
      </div>
      <div>
        <Post message='Hi, how are you?'/>
        <Post message='Fine, what about you?'/>
      </div>
    </div>
  );
};

export default MyPosts;

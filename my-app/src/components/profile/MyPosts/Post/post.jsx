import s from './post.module.css';

const Post = (props) =>{
  return (
    <div className={s.post}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png" />
      {props.message}
    </div>
  );
};

export default Post;

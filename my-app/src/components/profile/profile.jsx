import s from './profile.module.css';
import MyPosts from './MyPosts/myposts.jsx';
import MyInfo from './myInfo/myinfo.jsx'

const Profile = (props) =>{
  return (
    <div className={s.content}>
      <MyInfo />
      <MyPosts posts={props.state.posts}/>
    </div>
  );
};

export default Profile;

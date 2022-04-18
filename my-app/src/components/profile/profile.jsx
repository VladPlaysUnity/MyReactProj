import s from './profile.module.css';
import MyPostsContainer from './MyPosts/myPostsContainer.jsx';
import MyInfo from './myInfo/myinfo.jsx'

const Profile = (props) =>{
  return (
    <div className={s.content}>
      <MyInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;

import s from './profile.module.css';
import MyPosts from './MyPosts/myposts.jsx';
import MyInfo from './myInfo/myinfo.jsx'

const Profile = () =>{
  return (
    <div className={s.content}>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrCXtELPLwJFnq4sdWbvL5F-HAxQspRqwZyA&usqp=CAU'/>
      </div>
      <MyInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;

import s from './myinfo.module.css';

const MyInfo = () =>{
  return (
    <div className={s.myinfo}>
      <img src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale" />
      <div className={s.text}>
        description
      </div>
    </div>
  );
};

export default MyInfo;

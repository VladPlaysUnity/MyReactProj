import s from './myinfo.module.css';

const MyInfo = () =>{
  return (
    <div className={s.myinfo}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrCXtELPLwJFnq4sdWbvL5F-HAxQspRqwZyA&usqp=CAU'/>
      <div className={s.mydescr}>
        <img src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale" />
        <div className={s.text}>
          <div className={s.item}><span>Name:</span> Vlad Skyfly</div>
          <div className={s.item}><span>Birth date:</span> 01.01.2000</div>
          <div className={s.item}><span>Bio:</span> I am a good student. I like programming</div>
          <div className={s.item}><span>Workplace:</span> Studying in Liceum</div>
          <div className={s.item}><span>Phone:</span> +12 1234567</div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;

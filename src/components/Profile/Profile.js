import style from './Profile.module.css';
import profilepic from '../../assets/profilepic.png';
import {constant} from '../../constants';

const Profile = (props) => {
  return (
    <div className={style.profileWrapper}>
      <img src={profilepic} className={style.imageContainer} alt='profilepic'/>
      <hr width="1" size="50" color='white'/>
      <hr className={style.line}/>
      <h1 className={style.name}>{props.name}</h1>
      <p className={style.aboutMeContainer}>{constant.WELCOME}</p>
      <hr className={style.line}/>
      <hr width="1" size="50" color='white'/>
    </div>
  );
}

/**
 * How to put stuff on a new line each time using text
 * <br/> component is a break line
 * See about what tag to put text in lol
 *  
 * */

export default Profile;
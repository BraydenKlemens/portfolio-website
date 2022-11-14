import style from "./Profile.module.css";
import profilepic from "../../assets/profilepic.png";
import { constant } from "../../constants";
import Contact from "./Contact";

const Profile = (props) => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.name}>{props.name}</h1>
      <img src={profilepic} className={style.imageContainer} alt="profilepic" />
      <Contact />
      <div className={style.about}>
        <hr width="1" size="30" color="white" />
        <hr className={style.line} />
        <p className={style.aboutContainer}>{constant.WELCOME}</p>
        <hr className={style.line} />
        <hr width="1" size="30" color="white" />
      </div>
    </div>
  );
};

export default Profile;

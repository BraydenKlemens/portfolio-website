import style from "./Profile.module.css";
import profilepic from "../../assets/profilepic.png";
import { constants } from "../../constants";
import Contact from "./Contact";

const Profile = () => {
  return (
    <>
      {/* header profile pic, name and contact */}
      <div className={style.profileWrapper}>
        <h1 className={style.title}>Brayden Klemens</h1>
        <img
          src={profilepic}
          className={style.imageContainer}
          alt="profilepic"
        />
        <Contact />
      </div>

      {/* About me section */}
      <div className={style.aboutWrapper}>
        <hr width="1" size="30" color="white" id="verticalLine" />
        <hr />
        <p className={style.info}>{constants.ABOUT}</p>
        <hr />
        <hr width="1" size="30" color="white" id="verticalLine" />
      </div>
    </>
  );
};

export default Profile;

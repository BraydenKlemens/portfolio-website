import styles from "./Profile.module.css";
import profilepic from "../../assets/profilepic.png";
import { constants } from "../../constants";
import Contact from "./Contact";
import InfoSection from "../UI/InfoSection";
import Divider from "../UI/Divider";

const Profile = ({ name }) => {
  return (
    <>
      {/* header profile pic, name and contact */}
      <div className={styles.wrapper}>
        <h1 className={styles.name}>{name}</h1>
        <img
          src={profilepic}
          className={styles.imageContainer}
          alt="profilepic"
        />
        <Contact />
      </div>

      {/* About me section */}
      <hr width="1" size="30" color="white" id="verticalLine" />
      <Divider type={"long"} />
      <InfoSection>{constants.ABOUT}</InfoSection>
      <Divider type={"long"} />
      <hr width="1" size="30" color="white" id="verticalLine" />
    </>
  );
};

export default Profile;

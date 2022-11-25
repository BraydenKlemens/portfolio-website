import style from "./Screen.module.css";
import btnStyle from "../Content/Tab.module.css";
import { constants } from "../../constants";
import resume from "../../assets/resume/resumepic.png";

const AboutScreen = () => {
  return (
    <div className={style.aboutScreenWrapper}>
      {/* hobbies description */}
      <hr />
      <h2 className={style.contentsCenter}>Hobbies & Interests</h2>
      <hr />
      <ul>
        {constants.HOBBIES.map((bullet, j) => (
          <li style={{ fontSize: 18, fontWeight: "bold" }} key={j}>
            {bullet}
          </li>
        ))}
      </ul>

      {/* Download resume section */}
      <hr />
      <h2 className={style.contentsCenter}>Resume</h2>
      <hr />
      <div className={style.contentsCenter}>
        <button className={btnStyle.btn}>DOWNLOAD</button>
        <img
          src={resume}
          className={style.imageContainer}
          alt="Resume Picture"
        />
      </div>
    </div>
  );
};

export default AboutScreen;

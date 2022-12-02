import style from "./Screen.module.css";
import btnStyle from "../Content/Tab.module.css";
import { constants } from "../../constants";
import resumepic from "../../assets/resume/resumepic.png";
import resumepdf from "../../assets/resume/BraydenKlemensResume.pdf";

const AboutScreen = () => {
  return (
    <div className={style.aboutScreenWrapper}>
      {/* hobbies description */}
      <hr />
      <h2 className={style.contentsCenter}>Hobbies & Interests</h2>
      <hr />
      <ul>
        {constants.HOBBIES.map((hobby, i) => (
          <li style={{ fontSize: 18, fontWeight: "bold" }} key={i}>
            {hobby}
          </li>
        ))}
      </ul>

      {/* Download resume section */}
      <hr />
      <h2 className={style.contentsCenter}>Resume</h2>
      <hr />
      <div className={style.contentsCenter}>
        <a
          href={resumepdf}
          download="BraydenKlemensResume.pdf"
          className={btnStyle.btn}
        >
          DOWNLOAD
        </a>
        <img src={resumepic} className={style.imageContainer} alt="Resume" />
      </div>
    </div>
  );
};

export default AboutScreen;

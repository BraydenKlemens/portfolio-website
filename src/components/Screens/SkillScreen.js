import ProgressBar from "../UI/ProgressBar";
import { constants } from "../../constants";
import style from "./Screen.module.css";

const green = {
  color: "Green",
  fontWeight: "bold",
  fontSize: 16,
  margin: 10,
};

const red = {
  color: "Red",
  fontWeight: "bold",
  fontSize: 16,
  margin: 10,
};

const orange = {
  color: "Orange",
  fontWeight: "bold",
  fontSize: 16,
  margin: 10,
};

const SkillBuilder = ({ name, arr }) => {
  return (
    <>
      <h2>{name}</h2>
      {arr.map((skill, i) => (
        <ProgressBar key={i} completed={skill.level} name={skill.name} />
      ))}
    </>
  );
};

const SkillScreen = () => {
  const languages = constants.SKILL_LANGUAGES;
  const frameworks = constants.SKILL_FRAMEWORKS;
  return (
    <div className={style.skillScreenWrapper}>
      <div className={style.contentsRow}>
        <p style={red}>Learning</p>
        <p style={orange}>Working Knowledge</p>
        <p style={green}>Proficient</p>
      </div>
      <SkillBuilder arr={languages} name={"Programming Languages"} />
      <SkillBuilder arr={frameworks} name={"Frameworks"} />
    </div>
  );
};

export default SkillScreen;

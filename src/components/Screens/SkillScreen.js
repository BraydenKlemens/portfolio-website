import ProgressBar from "../UI/ProgressBar";
import { constants } from "../../constants";
import style from "./Screen.module.css";

const SkillBuilder = ({ name, arr }) => {
  return (
    <>
      <h2>{name}</h2>
      {arr.map((i) => (
        <ProgressBar completed={i.level} name={i.name} />
      ))}
    </>
  );
};

const SkillScreen = () => {
  const languages = constants.SKILL_LANGUAGES;
  const frameworks = constants.SKILL_FRAMEWORKS;
  return (
    <div className={style.skillScreenWrapper}>
      <SkillBuilder arr={languages} name={"Programming Languages"} />
      <SkillBuilder arr={frameworks} name={"Frameworks"} />
    </div>
  );
};

export default SkillScreen;

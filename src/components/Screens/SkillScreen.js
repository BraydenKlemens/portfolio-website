import ProgressBar from "../UI/ProgressBar";
import { constants } from "../../constants";
import Divider from "../UI/Divider";
import style from "./Screen.module.css";

const SkillScreen = () => {
  const languages = constants.SKILL_LANGUAGES;
  const frameworks = constants.SKILL_FRAMEWORKS;

  return (
    <div className={style.wrapper}>
      <h2>Programming Languages</h2>
      {languages.map((language) => (
        <ProgressBar
          bgcolor={"gray"}
          completed={language.level}
          name={language.name}
        />
      ))}
    </div>
  );
};

export default SkillScreen;

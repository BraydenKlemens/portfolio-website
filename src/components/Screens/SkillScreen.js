import ProgressBar from "../UI/ProgressBar";
import { constants } from "../../constants";
import Divider from "../UI/Divider";
import style from "./CareerScreen.module.css";

const SkillScreen = () => {
  const languages = constants.SKILL_LANGUAGES;
  const frameworks = constants.SKILL_FRAMEWORKS;

  return (
    <>
      {languages.map((language) => (
        <ProgressBar
          bgcolor={"gray"}
          completed={language.level}
          name={language.name}
        />
      ))}
    </>
  );
};

export default SkillScreen;

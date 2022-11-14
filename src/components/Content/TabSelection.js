import style from "./TabSelection.module.css";
import AnimatedButton from "./Tab";

const TabSelection = () => {
  return (
    <div className={style.wrapper}>
      <AnimatedButton name={"EDUCATION"} id={"0"} />
      <AnimatedButton name={"WORK"} id={"1"} />
      <AnimatedButton name={"SKILLS"} id={"2"} />
      <AnimatedButton name={"PROJECTS"} id={"3"} />
      <AnimatedButton name={"GAMEDEV"} id={"3"} />
    </div>
  );
};

export default TabSelection;

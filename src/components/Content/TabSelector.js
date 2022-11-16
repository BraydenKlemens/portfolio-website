import style from "./TabSelector.module.css";
import Tab from "./Tab";

const TabSelector = (props) => {
  return (
    <div className={style.wrapper}>
      <Tab name={"EDUCATION"} tabID={"0"} onTabChange={props.onTabChange} />
      <Tab name={"WORK"} TabID={"1"} onTabChange={props.onTabChange} />
      <Tab name={"SKILLS"} tabID={"2"} onTabChange={props.onTabChange} />
      <Tab name={"PROJECTS"} tabID={"3"} onTabChange={props.onTabChange} />
      <Tab name={"GAMEDEV"} tabID={"4"} onTabChange={props.onTabChange} />
    </div>
  );
};

export default TabSelector;

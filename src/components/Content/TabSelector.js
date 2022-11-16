import style from "./TabSelector.module.css";
import Tab from "./Tab";

const TabSelector = ({ onTabChange, activeTab }) => {
  return (
    <div className={style.wrapper}>
      <Tab
        name={"EDUCATION"}
        tabID={"tab_0"}
        onTabChange={onTabChange}
        activeTab={activeTab}
      />
      <Tab
        name={"WORK"}
        tabID={"tab_1"}
        onTabChange={onTabChange}
        activeTab={activeTab}
      />
      <Tab
        name={"SKILLS"}
        tabID={"tab_2"}
        onTabChange={onTabChange}
        activeTab={activeTab}
      />
      <Tab
        name={"PROJECTS"}
        tabID={"tab_3"}
        onTabChange={onTabChange}
        activeTab={activeTab}
      />
      <Tab
        name={"GAMEDEV"}
        tabID={"tab_4"}
        onTabChange={onTabChange}
        activeTab={activeTab}
      />
    </div>
  );
};

export default TabSelector;

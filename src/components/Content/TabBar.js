import style from "./TabBar.module.css";
import Tab from "./Tab";

const TabBar = ({ onTabChange, activeTab }) => {
  return (
    <div className={style.tabWrapper}>
      <Tab
        name={"CAREER"}
        tabID={"tab_0"}
        onTabChange={onTabChange}
        activeTab={activeTab}
      />
      <Tab
        name={"SKILLS"}
        tabID={"tab_1"}
        onTabChange={onTabChange}
        activeTab={activeTab}
      />
      <Tab
        name={"PROJECTS"}
        tabID={"tab_2"}
        onTabChange={onTabChange}
        activeTab={activeTab}
      />
      <Tab
        name={"GAMEDEV"}
        tabID={"tab_3"}
        onTabChange={onTabChange}
        activeTab={activeTab}
      />
      <Tab
        name={"ABOUT"}
        tabID={"tab_4"}
        onTabChange={onTabChange}
        activeTab={activeTab}
      />
    </div>
  );
};

export default TabBar;

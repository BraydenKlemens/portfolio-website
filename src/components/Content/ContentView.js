import style from "./ContentView.module.css";

const ContentView = ({ activeTab }) => {
  return (
    <div className={style.wrapper}>
      {activeTab == "tab_0" && <p>Tab 0</p>}
      {activeTab == "tab_1" && <p>Tab 1</p>}
      {activeTab == "tab_2" && <p>Tab 2</p>}
      {activeTab == "tab_3" && <p>Tab 3</p>}
      {activeTab == "tab_4" && <p>Tab 4</p>}
    </div>
  );
};

export default ContentView;

import style from "./ContentView.module.css";

const ContentView = ({ tabID }) => {
  return (
    <div className={style.wrapper}>
      {tabID == "1" && <p>Tab 1</p>}
      {tabID == "1" && <p>Tab 1</p>}
      {tabID == "1" && <p>Tab 1</p>}
      {tabID == "1" && <p>Tab 1</p>}
      {tabID == "1" && <p>Tab 1</p>}
    </div>
  );
};

export default ContentView;

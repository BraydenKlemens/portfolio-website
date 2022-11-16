import style from "./Tab.module.css";

const Tab = ({ onTabChange, name, tabID, activeTab }) => {
  const onTabChangeHandler = () => {
    onTabChange(tabID);
  };

  return (
    <>
      {activeTab == tabID && (
        <button
          type="button"
          className={style.active}
          onClick={onTabChangeHandler}
        >
          {name}
        </button>
      )}

      {activeTab != tabID && (
        <button
          type="button"
          className={style.btn}
          onClick={onTabChangeHandler}
        >
          {name}
        </button>
      )}
    </>
  );
};

export default Tab;

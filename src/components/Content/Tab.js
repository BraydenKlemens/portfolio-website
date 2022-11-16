import style from "./Tab.module.css";

const Tab = (props) => {
  return (
    <button
      type="button"
      className={style.btn}
      id={props.id}
      onClick={props.onTabChange}
    >
      {props.name}
    </button>
  );
};

export default Tab;

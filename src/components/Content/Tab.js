import style from "./Tab.module.css";

const Tab = (props) => {
  return (
    <button type="button" className={style.btn} id={props.id}>
      {props.name}
    </button>
  );
};

export default Tab;

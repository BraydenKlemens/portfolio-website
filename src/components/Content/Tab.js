import style from "./Tab.module.css";

const Tab = (props) => {
  return (
    <div className={style.wrapper}>
      <button type="button" className={style.btn} id={props.id}>
        {props.name}
      </button>
    </div>
  );
};

export default Tab;

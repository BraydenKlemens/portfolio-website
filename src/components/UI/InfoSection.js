import style from "./InfoSection.module.css";

const InfoSection = (props) => {
  return (
    <div className={style.container}>
      <p className={style.info}>{props.children}</p>
    </div>
  );
};

export default InfoSection;

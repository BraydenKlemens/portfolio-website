import style from "./Divider.module.css";

const Divider = ({ type }) => {
  return (
    <>
      {type === "long" && (
        <div className={style.containerLong}>
          <hr />
        </div>
      )}

      {type === "short" && (
        <div className={style.containerShort}>
          <hr />
        </div>
      )}
    </>
  );
};

export default Divider;

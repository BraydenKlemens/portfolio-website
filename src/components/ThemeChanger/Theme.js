import style from "./Theme.module.css";

const Theme = () => {
  const themeBlack = () => (document.body.style = "background-color: black");
  const themeGray = () => (document.body.style = "background-color: #282c34");
  return (
    <div className={style.container}>
      <button onClick={themeBlack}>black</button>
      <button onClick={themeGray}>Gray</button>
    </div>
  );
};

export default Theme;

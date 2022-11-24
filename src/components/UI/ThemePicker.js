import style from "./ThemePicker.module.css";
import { useEffect, useState } from "react";

const ThemePicker = () => {
  const [color, setColor] = useState("#282c34");

  const changeColor = (color) => {
    setColor(color);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className={style.container}>
      <div onClick={() => changeColor("Gray")} className={style.light}></div>
      <div onClick={() => changeColor("#282c34")} className={style.dark}></div>
      <div onClick={() => changeColor("black")} className={style.black}></div>
    </div>
  );
};

export default ThemePicker;

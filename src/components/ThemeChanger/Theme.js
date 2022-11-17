import style from "./Theme.module.css";
import { useEffect, useState } from "react";

const Theme = () => {
  const [color, setColor] = useState("#282c34");

  const changeColor = (color) => {
    setColor(color);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className={style.container}>
      <button onClick={() => changeColor("Gray")}>Light</button>
      <button onClick={() => changeColor("#282c34")}>Dark</button>
      <button onClick={() => changeColor("black")}>Black</button>
    </div>
  );
};

export default Theme;

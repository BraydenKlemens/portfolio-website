import { useState, useEffect } from "react";
import style from "./PictureUpdater.module.css";

/*This will take a project object*/
const PictureUpdater = ({ pictures }) => {
  const picArray = pictures;
  const [index, setIndex] = useState(0);
  const [pic, setPic] = useState(picArray[0]);

  const changePicBack = () => {
    if (index === 0) return;
    setIndex((i) => i - 1);
  };
  const changePicForward = () => {
    if (index === picArray.length - 1) return;
    setIndex((i) => i + 1);
  };

  useEffect(() => {
    setPic((prev) => (prev = picArray[index]));
  }, [index, picArray]);

  return (
    <>
      <div className={style.imageContainer}>
        <img
          src={pic}
          className={style.imageContainer}
          alt="project pictures"
        />
      </div>
      <div className={style.buttonContainer}>
        <button className={style.btn} onClick={changePicBack}>
          &lt;
        </button>
        <button className={style.btn} onClick={changePicForward}>
          &gt;
        </button>
      </div>
    </>
  );
};

export default PictureUpdater;

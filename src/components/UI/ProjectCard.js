import style from "./ProjectCard.module.css";
import { useState, useEffect } from "react";

const ProjectCard = () => {
  const picArray = ["one", "two", "three"];
  const [index, setIndex] = useState(0);
  const [pic, setPic] = useState(picArray[0]);

  const changePicBack = () => {
    if (index == 0) return;
    setIndex((i) => i - 1);
  };
  const changePicForward = () => {
    if (index == picArray.length - 1) return;
    setIndex((i) => i + 1);
  };

  useEffect(() => {
    setPic((prev) => (prev = picArray[index]));
  }, [index]);

  return (
    <div className={style.buttonWrapper}>
      <button type="button" onClick={changePicBack}>
        Forward
      </button>
      {pic}
      <button type="button" onClick={changePicForward}>
        Backward
      </button>
    </div>
  );
};

export default ProjectCard;

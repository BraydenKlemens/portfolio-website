import { constants } from "../../constants";
import style from "./Screen.module.css";
import ProjectCard from "../UI/ProjectCard";

const GameDevScreen = () => {
  const projects = constants.GAMES;

  return (
    <div className={style.projectScreenWrapper}>
      {projects.map((project, i) => (
        <ProjectCard project={project} key={i} />
      ))}
    </div>
  );
};

export default GameDevScreen;

import PictureUpdater from "../UI/PictureUpdater";
import { constants } from "../../constants";
import style from "./Screen.module.css";
import ProjectCard from "../UI/ProjectCard";

const ProjectScreen = () => {
  const projects = constants.PROJECTS;

  return (
    <div className={style.projectScreenWrapper}>
      {projects.map((project, i) => (
        <ProjectCard project={project} key={i} />
      ))}
    </div>
  );
};

export default ProjectScreen;

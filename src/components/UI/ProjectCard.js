import PictureUpdater from "./PictureUpdater";
import style from "./ProjectCard.module.css";
import { VscGithub } from "react-icons/vsc";

const ProjectCard = ({ project }) => {
  return (
    <div className={style.cardWrapper}>
      <h2>{project.title}</h2>
      <PictureUpdater pictures={project.urls} />
      <div>
        <p className={style.content}>
          <strong>Description:</strong>
          {project.description}
        </p>
        <p className={style.content}>
          <strong>Stack:</strong>
          {project.stack}
        </p>
        <div className={style.iconWrapper}>
          <a
            className={style.icon}
            href="https://github.com/BraydenKlemens"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub size={36} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

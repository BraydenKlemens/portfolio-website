import PictureUpdater from "./PictureUpdater";
import style from "./ProjectCard.module.css";
import { VscGithub } from "react-icons/vsc";
import { FaFileDownload } from "react-icons/fa";

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
            id={style.github}
            href="https://github.com/BraydenKlemens"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub size={36} />
          </a>
          {project.gamefile && (
            <a
              className={style.icon}
              id={style.download}
              href={project.gamefile}
              download={project.download}
            >
              <FaFileDownload size={36} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

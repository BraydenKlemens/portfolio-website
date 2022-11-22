import PictureUpdater from "./PictureUpdater";
import style from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  return (
    <div className={style.cardWrapper}>
      <PictureUpdater pictures={project.urls} />
      {/* <p style={{ color: "black" }}>{`Description: ${project.description}`}</p> */}
    </div>
  );
};

export default ProjectCard;

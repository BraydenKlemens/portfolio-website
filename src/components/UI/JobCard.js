import style from "./JobCard.module.css";

const JobCard = ({ job }) => {
  return (
    <>
      <div className={style.contentsRow}>
        <img src={job.image} className={style.imageContainer} alt="icon" />
        <h2>{`${job.position} - ${job.title}`}</h2>
      </div>
      <h4>{`${job.date} | ${job.location}`}</h4>
      <ul>
        {job.bullets.map((bullet, j) => (
          <li style={{ fontSize: 18, fontWeight: "bold" }} key={j}>
            {bullet}
          </li>
        ))}
      </ul>
    </>
  );
};

export default JobCard;

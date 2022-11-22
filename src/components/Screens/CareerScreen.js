/*
- Download Stuff button
- Work experience card
- project card
*/
import { constants } from "../../constants";
import style from "./Screen.module.css";
// import picture from "../../assets/profilepic.png";

const CareerScreen = () => {
  const jobs = constants.WORK;
  // const education = constants.EDUCATION;

  return (
    <>
      {jobs.map((job, i) => (
        <div key={i} className={style.careerScreenWrapper}>
          <h2>{`${job.position} @ ${job.title}`}</h2>
          <h4>{`${job.date} | ${job.location}`}</h4>
          <ul className={style.contents}>
            {job.bullets.map((bullet, j) => (
              <li key={j}>{bullet}</li>
            ))}
          </ul>
          <hr />
        </div>
      ))}
      {/* <a href={picture} download>
        Download
      </a> */}
    </>
  );
};

export default CareerScreen;

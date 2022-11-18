/*
- Download Stuff button
- Work experience card
- project card
*/
import { constants } from "../../constants";
import style from "./Screen.module.css";

const CareerScreen = () => {
  const jobs = constants.WORK;
  const education = constants.EDUCATION;

  return (
    <>
      {jobs.map((job) => (
        <div className={style.careerScreenWrapper}>
          <h2>{`${job.position} @ ${job.title}`}</h2>
          <h4>{`${job.date} | ${job.location}`}</h4>
          <ul className={style.contents}>
            {job.bullets.map((bullet) => (
              <li>{bullet}</li>
            ))}
          </ul>
          <hr />
        </div>
      ))}
    </>
  );
};

export default CareerScreen;

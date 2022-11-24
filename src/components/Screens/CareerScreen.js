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
  const education = constants.EDUCATION;

  return (
    <div className={style.careerScreenWrapper}>
      {/*Education Section */}
      <h2 className={style.contentCenter}>Education</h2>
      <h2>{education.degree}</h2>
      <h4>{`${education.date} | ${education.title}`}</h4>
      <ul>
        <li>{education.bullet}</li>
      </ul>
      <hr />

      {/*Work Experience Section */}
      <h2 className={style.contentCenter}>Work Experience</h2>
      {jobs.map((job, i) => (
        <div key={i}>
          <h2>{`${job.position} - ${job.title}`}</h2>
          <h4>{`${job.date} | ${job.location}`}</h4>
          <ul className={style.contents}>
            {job.bullets.map((bullet, j) => (
              <li key={j}>{bullet}</li>
            ))}
          </ul>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CareerScreen;

/*
- Download Stuff button
- Work experience card
- project card
*/
import { constants } from "../../constants";
import JobCard from "../UI/JobCard";
import style from "./Screen.module.css";

const CareerScreen = () => {
  const jobs = constants.WORK;
  const education = constants.EDUCATION;

  return (
    <div className={style.careerScreenWrapper}>
      {/*Education Section */}
      <hr />
      <h2 className={style.contentsCenter}>Education</h2>
      <hr />
      <JobCard job={education} />

      {/*Work Experience Section */}
      <hr />
      <h2 className={style.contentsCenter}>Work Experience</h2>
      <hr />
      {jobs.map((job, i) => (
        <div key={i}>
          <JobCard job={job} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CareerScreen;

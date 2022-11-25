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

      {/* Wordpress website link */}
      <a
        style={{ color: "#58A6FF", fontSize: 20, fontWeight: "bold" }}
        href="https://bklemenscoop.wordpress.com"
        target="_blank"
        rel="noreferrer"
      >
        Click here to learn more about my Co-op experiences
      </a>
      <hr />
    </div>
  );
};

export default CareerScreen;

import { constants } from "../../constants";
import JobCard from "../UI/JobCard";
import WebLink from "../UI/WebLink";
import style from "./Screen.module.css";

const CareerScreen = () => {
  const jobs = constants.WORK;
  const education = constants.EDUCATION;
  const links = constants.LINKS;

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

      {/* Links Section */}
      <h2 className={style.contentsCenter}>Extra Content</h2>
      <hr />
      <ul>
        {links.map((link, i) => (
          <li>
            <WebLink title={link.title} link={link.link} />
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default CareerScreen;

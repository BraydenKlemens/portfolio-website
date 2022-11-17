/*
- Download Stuff button
- Work experience card
- project card
*/
import { constants } from "../../constants";
import Divider from "../UI/Divider";
import InfoSection from "../UI/InfoSection";
import style from "./CareerScreen.module.css";

const CareerScreen = () => {
  const jobs = constants.WORK;
  const education = constants.EDUCATION;

  return (
    <>
      {jobs.map((job) => (
        <>
          <div className={style.container}>
            <h2>{`${job.position} @ ${job.title}`}</h2>
            <ul className={style.contents}>
              {job.bullets.map((bullet) => (
                <li>{bullet}</li>
              ))}
            </ul>
          </div>
          <Divider />
        </>
      ))}
    </>
  );
};

export default CareerScreen;

/*
- Download Stuff button
- Work experience card
- project card
*/
import { constants } from "../../constants";
import Divider from "../UI/Divider";

const CareerScreen = () => {
  const jobs = constants.WORK;
  const education = constants.EDUCATION;

  return (
    <>
      {jobs.map((job) => (
        <>
          <h2>{`${job.position} @ ${job.title}`}</h2>
        </>
      ))}
    </>
  );
};

export default CareerScreen;

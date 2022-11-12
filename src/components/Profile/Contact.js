import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import style from "./Contact.module.css";

const Contact = () => {
  const iconSize = 36;
  return (
    <div className={style.wrapper}>
      <a
        className={style.icon}
        href="https://www.linkedin.com/in/brayden-klemens-034490226/"
        id={style.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin size={iconSize} />
      </a>
      <a
        className={style.icon}
        href="https://github.com/BraydenKlemens"
        id={style.github}
        target="_blank"
        rel="noreferrer"
      >
        <VscGithub size={iconSize} />
      </a>
      <a
        className={style.icon}
        href="mailto:bklemens13@gmail.com"
        id={style.mail}
        target="_blank"
        rel="noreferrer"
      >
        <MdEmail size={iconSize} />
      </a>
    </div>
  );
};
export default Contact;

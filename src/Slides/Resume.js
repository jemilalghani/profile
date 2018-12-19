import React from "react";
import resume from "../Images/Jemila Al-Ghani (2).png";
import "./Resume.scss";
import Final from "../Images/Jemila Al-Ghani (3).pdf";

const Resume = () => {
  return (
    <a href={Final} download>
      <img className="resume-img" src={resume} alt="" />
    </a>
  );
};

export default Resume;

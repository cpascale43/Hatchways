import React from "react";
import "../Student.css";

import { getAverage } from "../utils";

const Student = (props) => {
  const {
    pic,
    firstName,
    lastName,
    email,
    company,
    skill,
    grades,
  } = props.student;

  const name = `${firstName.toUpperCase()} ${lastName.toUpperCase()}`
  const average = getAverage(grades);

  return (
    <div className="student-card">
      <div className="image-container">
        <img className="pic" src={pic} alt={name} width="150" height="150" />
      </div>
      <div className="text-container">
      <h1 className="student-name">{name}</h1>
      <div className="text">
      <p>Email: {email}</p>
      <p>Company: {company}</p>
      <p>Skill: {skill}</p>
      <p>Average: {average}%</p>
      </div>
      </div>
    </div>
  );
};

export default Student;

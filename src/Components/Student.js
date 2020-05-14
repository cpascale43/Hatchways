import React, { useState } from "react";
import "../Student.css";
import "../Input.css";

import ExpandIcon from "./ExpandIcon";
import HideIcon from "./HideIcon";
import TagForm from "./TagForm";
import { getAverage } from "../utils";

const Student = (props) => {
  const [expandView, setExpandView] = useState(false);
  const [studentTags, setStudentTags] = useState([])
  const {
    pic,
    firstName,
    lastName,
    email,
    company,
    skill,
    grades,
  } = props.student;

  const setTags = props.setTags
  const name = `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
  const average = getAverage(grades);

  const addTag = (val) => {
    setStudentTags([...studentTags, val])
    setTags([...studentTags, val])
    console.log('hi from function scope', studentTags)
  };

  console.log('hi from the global scope', studentTags);

  return (
    <div className="student-card-container">
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
        <div className="button-container">
          {expandView ? (
            <HideIcon setExpandView={setExpandView} expandView={expandView} />
          ) : (
            <ExpandIcon setExpandView={setExpandView} expandView={expandView} />
          )}
        </div>
      </div>
      {expandView && (
        <div className="grades-container">
          {/* {grades.map((grade, idx) => {
            return (
              <p key={idx}>
                {`Test ${idx + 1}:`}&nbsp;&nbsp;&nbsp;&nbsp;{`${grade}%`}
              </p>
            );
          })} */}
          {studentTags && studentTags.length > 0 ? (
            studentTags.map((tag) => <p>{tag}</p>)
          ) : (
            <p>No tags</p>
          )}
          <TagForm addTag={addTag} />
        </div>
      )}
    </div>
  );
};

export default Student;

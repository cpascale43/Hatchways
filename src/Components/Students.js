import React, { useState, useEffect } from "react";
import "../Student.css";

import { getStudents } from "../utils";
import Student from './Student'

const Students = (props) => {
  const [students, setStudents] = useState([]);

  async function handleStudents() {
    let data = await getStudents();
    setStudents(data.students);
  }

  useEffect(() => {
    handleStudents();
  }, []);

  return (
    <div className="student-container">
      {students.length !== 0 ? students.map(student => {
      return (
        <>
        <Student student={student} key={student.id} />
        </>
      )}) : <p>Loading students...</p> }
    </div>
  );
};

export default Students;

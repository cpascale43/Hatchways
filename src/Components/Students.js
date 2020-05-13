import React, { useState, useEffect } from "react";

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
    <div>
      {students.length !== 0 ? students.map((student, idx) => {
      return (
        <div key={student.id}>
        <Student student={student} />
        </div>
      )}) : <p>Loading students...</p> }
    </div>
  );
};

export default Students;

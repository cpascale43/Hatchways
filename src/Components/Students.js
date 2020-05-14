import React, { useState, useEffect } from "react";
import "../Student.css";

import { getStudents } from "../utils";
import Student from "./Student";
import InputForm from "./InputForm";

const Students = (props) => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [tags, setTags] = useState([])

  async function handleStudents() {
    let data = await getStudents();
    let students = data.students;
    students.map(student => {
      student.tags = []
    })
    console.log(students)
    setStudents(students);
  }

  const filterNames = (event) => {
    let str = event.target.value;
    let newStudents = students.filter((student) => {
      const name = `${student.firstName} ${student.lastName}`.toLowerCase();
      return name.includes(str);
    });
    setFilteredStudents(newStudents);
  };

  useEffect(() => {
    handleStudents();
  }, []);

  console.log(tags)

  if (students.length === 0) {
    return (
      <div>
        <p>Loading students...</p>
      </div>
    );
  } else
    return (
      <div className="student-container">
        <InputForm type={'name'} filter={filterNames} />
        <InputForm type={'tags'} filter={filterNames} />
        {filteredStudents.length !== 0 ? (
          filteredStudents.map((student) => {
            return (
              <>
                <Student setTags={setTags} student={student} key={student.id} />
              </>
            );
          })
        ) : (
          students.map((student) => {
            return (
              <>
                <Student setTags={setTags} student={student} key={student.id} />
              </>
            );
          })
        )}
      </div>
    );
};

export default Students;

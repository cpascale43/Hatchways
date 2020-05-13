import React from 'react'

import {getAverage} from '../utils'

const Student = props => {
  const {pic, firstName, lastName, email, company, skill, grades} = props.student

  console.log(grades)
  const average = getAverage(grades)
  console.log(average)

  return (
    <div>
      <img src={pic} alt={`${firstName} ${lastName}`} />
      <h2>Name: {`${firstName} ${lastName}`}</h2>
      <p>Email: {email}</p>
      <p>Company: {company}</p>
      <p>Skill: {skill}</p>
      <p>Average: {average}%</p>
    </div>
  )
}

export default Student;

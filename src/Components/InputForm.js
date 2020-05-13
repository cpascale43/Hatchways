import React from 'react'
import '../Input.css'

const InputForm = props => {
  return (
    <input id="name-input" placeholder='Search by name' onChange={props.filterNames} />
  )
}


export default InputForm

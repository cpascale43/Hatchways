import React from 'react'

const InputForm = props => {
  return (
    <input id={`${props.type}-input`} placeholder={`Search by ${props.type}`} onChange={props.filter} />
  )
}


export default InputForm

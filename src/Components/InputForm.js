import React from 'react'

const InputForm = ({ filterFunc, type }) => {
  return (
    <input id={`${type}-input`} placeholder={`Search by ${type}`} onChange={event => filterFunc(event.target.value.toLowerCase().trim)} />
  )
}

export default InputForm

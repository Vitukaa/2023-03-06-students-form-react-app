import React from 'react'

export default function Inputs({ type, name, data }) {


  return (
    <div>
        <input type={type} name={name} id={data} value={data} />
        <label htmlFor={data}>{data}</label>
    </div>
  )
}

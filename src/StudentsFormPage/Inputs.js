import React from 'react'

export default function Inputs({ type, name, data, onChecked, checked }) {
// console.log(onChecked)

  return (
    <div>
      <input type={type} name={name} id={data} value={data} onChange={onChecked} 
      checked={checked}/>
      <label htmlFor={data}>{data}</label>
    </div>
  )
}

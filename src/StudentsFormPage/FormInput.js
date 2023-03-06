import React from 'react'

export default function FormInput({ type, name, title, id, value, onInput }) {
console.log(value)
  return (
    <div className='form-control'>
      {type !== 'radio' ? (
        <>
          <label htmlFor={name}>{title}</label>
          <input type={type} name={name} defaultValue={value} onChange={onInput}></input>
        </>

      ) : (
        <>
          <input type={type} id={id} name={name} value={id} ></input>
          <label htmlFor={id}>{id}</label>
        </>
      )}

    </div>
  )
}

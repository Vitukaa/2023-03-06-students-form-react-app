import React from 'react'
import FormInput from './FormInput'

export default function Form({ onNewStudent, onInput, value }) {
    const groups = ['feu1', 'feu2', 'feu3', 'feu4', 'feu5']

  return (
    <form id='student-form' onSubmit={onNewStudent}>
        <FormInput type='text' title='Name:' name='name' value={value} onInput={onInput} />
        <FormInput type='text' title='Surname:' name='surname' />
        <FormInput type='number' title='Age:' name='age' />
        <FormInput type='tel' title='Phone:' name='phone' />
        <FormInput type='email' title='Email:' name='email' />
        <FormInput type='range' title='Knowledge:' name='knowledge' />
        <fieldset>
            <legend htmlFor='group'>Choose your group:</legend>
            {groups.map((group, index) => <FormInput key={index} id={group} type='radio' title={group} name='group' value={group} /> )}
        </fieldset>
        <FormInput type='submit' />
    </form>
  )
}

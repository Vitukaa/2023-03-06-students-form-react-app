import React from 'react'

export default function StudentItem(props) {
    const { name, surname, id, email, phone, group, interest, age, knowledge, isHidden, onDelete, onEdit, onPersonalInfo } = props


    const hideText = (text) => {
        return '*'.repeat(text.length)
    }

    

  return (
    <div className='student-output'>
        <h1>{name} {surname} ({age})</h1>
        <h3>IT knowledge: {knowledge}</h3>
        <h3>Group: {group}</h3>
        <h4>Interests:</h4>
        <ul>
        {interest.map(interest => <li>{interest}</li>)}
        </ul>
        <p>Contacts info:</p>
        <ul>
            {isHidden ? (
                <>
                    <li>Phone: {hideText(phone)}</li>
                    <li>Email: {hideText(email)}</li>
                </>
            ) : (
                <>
                    <li>Phone: {phone}</li>
                    <li>Email: {email}</li>
                </>
            )
            }
        </ul>
        <button onClick={() => onDelete(id)}>Delete</button>
        <button onClick={() => onPersonalInfo(id)}>{isHidden ? 'Show personal info' : 'Hide personal info'}</button>
        <button onClick={() => onEdit(id)}>Edit</button>
    </div>
  )
}

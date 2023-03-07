import React from 'react'

export default function StudentItem(props) {
    const { name, surname, id, email, phone, group, interest, age, knowledge, isHidden, onDelete, onEdit, setStudentsList } = props
    console.log(props.name)

    const hideText = (text) => {
        return '*'.repeat(text.length)
    }

    const personalInfoHandler = (id) => {
        setStudentsList(prevState => {
            const personalInfoOutput = prevState.map(student => {
                if (student.id === id) {
                    const personalInfoOuputChange =  {...student, isHidden: !student.isHidden}
                    return personalInfoOuputChange
                }
                return student
            })
            return personalInfoOutput
        })
    }

  return (
    <div className='student-output'>
        <h1>{name} {surname} ({age})</h1>
        <h3>IT knowledge: {knowledge}</h3>
        <h3>Group: {group}</h3>
        <h4>Interests:{interest}</h4>
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
        <button onClick={() => personalInfoHandler(id)}>{isHidden ? 'Show personal info' : 'Hide personal info'}</button>
        <button onClick={() => onEdit(id)}>Edit</button>
    </div>
  )
}

import { useState } from "react"
import Form from "./Form"

export default function StudentsFormPage() {
    const [studentsList, setStudentsList] = useState('')
    const [name, setName] = useState('')

    const inputHandler = (event) => {
        setName(event.target.value)
    }

    const createStudentHandler = (event) => {
        event.preventDefault()

        let studentDataObj = {
            name: event.target.name.value,
            surname: event.target.surname.value,
            age: event.target.age.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
            itKnowledge: event.target['it-knowledge'].value,
            group: event.target.group.value,
            // interests: studentInterests,
        }
    }

  return (
    <div>
        <Form 
            onNewStudent={createStudentHandler} 
            onInput={inputHandler}
            value={name}
        />
        <div className='output'>
            <h1></h1>
        </div>

    </div>

    

  )
}

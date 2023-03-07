import { useState } from "react"
import Inputs from "./Inputs"
import {v4 as uuid } from 'uuid'
import StudentItem from "./StudentItem"

export default function StudentsFormPage() {
    const [studentsList, setStudentsList] = useState([])
    // const [checked, setChecked] = useState(false)

    const groups = ['feu-1', 'feu-2', 'feu-3', 'feu-4', 'feu-5']
    const interests = ['javascript', 'ruby', 'php', 'c#', 'java']




    const deleteHandler = (id) => {
        setStudentsList(prevState => {
            return prevState.filter(student => student.id !== id)
        })
    }




    const editHandler = (id) => {
        
    }

    // const checkHandler = (event) => {
    //     const checked = event.target.checked
    //     const checkedValue = event.target.value
    //     const checkedName = event.target.name
    //     setChecked(event.target.checked)
    // }


    const createStudentHandler = (event) => {
        event.preventDefault()

        let studentDataObj = {
            id: uuid(),
            isHidden: true,
            name: event.target.name.value,
            surname: event.target.surname.value,
            age: event.target.age.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
            knowledge: event.target.knowledge.value,
            group: event.target.group.value,
            // interest: ,
        }
        setStudentsList(prevState => [studentDataObj, ...prevState])
    }

  return (
    <div>
        <form id='student-form' onSubmit={createStudentHandler}> 
            <div className='form-control'>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name'></input>
            </div>
            <div className='form-control'>
                <label htmlFor='surname'>Surname:</label>
                <input type='text' id='surname' name='surname'></input>
            </div>
            <div className='form-control'>
                <label htmlFor='age'>Age:</label>
                <input type='number' id='age' name='age'></input>
            </div>
            <div className='form-control'>
                <label htmlFor='phone'>Phone:</label>
                <input type='tel' id='phone' name='phone'></input>
            </div>
            <div className='form-control'>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email'></input>
            </div>
            <div className='form-control'>
                <label htmlFor='knowledge'>IT knowledge (0-10):</label>
                <input type='range' id='knowledge' name='knowledge' min='0' max='10'></input>
            </div>
            <fieldset>
                <legend htmlFor='group'>Choose your group:</legend>
                {groups.map((group, index) => <Inputs key={index} type='radio' name='group' data={group} />)}
            </fieldset>
            <fieldset>
                <legend>Choose IT language interests:</legend>
                {interests.map((interest, index) => <Inputs key={index} type='checkbox' name='interest' data={interest} />)}
            </fieldset>
            <input type='submit' value='Create student'></input>
        </form>


        {(studentsList && studentsList.length > 0) && 
            studentsList.map((student, index) => (
                <StudentItem key={index} {...student} student={student} onDelete={deleteHandler} onEdit={editHandler} setStudentsList={setStudentsList}/>
            ))
        }
    </div>
  )
}

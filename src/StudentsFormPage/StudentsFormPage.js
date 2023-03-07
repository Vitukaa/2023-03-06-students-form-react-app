import { useState } from "react"
import Inputs from "./Inputs"
import {v4 as uuid } from 'uuid'
import StudentItem from "./StudentItem"

export default function StudentsFormPage() {
    const [studentsList, setStudentsList] = useState([])

    const [formData, setFormData] = useState({
        id: null,
        isHidden: true,
        name: '',
        surname: '',
        age: '',
        phone: '',
        email: '',
        knowledge: '',
        group: '',
        interest: [],
    })
    
    const formInputHandler = event => {
        setFormData(prevState => {
            const updatedData = {...prevState}
            updatedData[event.target.name] = event.target.value
            return updatedData
        })
    }

    const checkboxInputHandler = event => {
        setFormData(prevState => {
            const updatedData = {...prevState}
            console.log(updatedData[event.target.name])
            if (updatedData[event.target.name].includes(event.target.value)) {
                updatedData[event.target.name] = updatedData[event.target.name].filter(interest => interest !== event.target.value )
            } else {
                updatedData[event.target.name] = [...updatedData[event.target.name], event.target.value]
            }
            return updatedData
        })
    }

    const groups = ['feu-1', 'feu-2', 'feu-3', 'feu-4', 'feu-5']
    const interests = ['javascript', 'ruby', 'php', 'c#', 'java']


    const deleteHandler = (id) => {
        setStudentsList(prevState => {
            return prevState.filter(student => student.id !== id)
        })
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


    const editHandler = (id) => {
        
    }

    const editSubmit = (id) => {
        setStudentsList(prevState => {
            const updatedList = prevState.map(student => {
                if (student.id === id) {
                    const editedStudentInfo = {...student, name: student.name} 
                    // setName(student.name)
                    return editedStudentInfo
                }
                return student
            })

            return updatedList
        })
    }


    const createStudentHandler = (event) => {
        event.preventDefault()

        setStudentsList(prevState => [{...formData, id: uuid()}, ...prevState])
        setFormData({
            id: null,
            isHidden: true,
            name: '',
            surname: '',
            age: '',
            phone: '',
            email: '',
            knowledge: '',
            group: '',
            interest: [],
        })
    }

  return (
    <div>
        <form id='student-form' onSubmit={createStudentHandler}> 
            <div className='form-control'>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' value={formData.name} onChange={formInputHandler}></input>
            </div>
            <div className='form-control'>
                <label htmlFor='surname'>Surname:</label>
                <input type='text' id='surname' name='surname' value={formData.surname} onChange={formInputHandler}></input>
            </div>
            <div className='form-control'>
                <label htmlFor='age'>Age:</label>
                <input type='number' id='age' name='age' value={formData.age} onChange={formInputHandler}></input>
            </div>
            <div className='form-control'>
                <label htmlFor='phone'>Phone:</label>
                <input type='tel' id='phone' name='phone' value={formData.phone} onChange={formInputHandler}></input>
            </div>
            <div className='form-control'>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' value={formData.email} onChange={formInputHandler}></input>
            </div>
            <div className='form-control'>
                <label htmlFor='knowledge'>IT knowledge (0-10):</label>
                <input type='range' id='knowledge' name='knowledge' min='0' max='10' value={formData.knowledge} onChange={formInputHandler}></input>
            </div>
            <fieldset>
                <legend htmlFor='group'>Choose your group:</legend>
                {groups.map((group, index) => { 

                    return group === formData.group ? (
                        <Inputs key={index} type='radio' name='group' data={group} onChecked={formInputHandler} checked={true}/>
                    ) : (
                        <Inputs key={index} type='radio' name='group' data={group} onChecked={formInputHandler} checked={false}/>
                    )
                }
                     
                
                    
                )}
            </fieldset>
            <fieldset>
                <legend>Choose IT language interests:</legend>
                {interests.map((interest, index) => {
                    
                    return formData.interest.includes(interest) ? (
                        <Inputs key={index} type='checkbox' name='interest' data={interest} onChecked={checkboxInputHandler} checked={true} />
                    ) : (
                        <Inputs key={index} type='checkbox' name='interest' data={interest} onChecked={checkboxInputHandler} checked={false} />
                    )
                })}
            </fieldset>
            <input type='submit' value='Create student'></input>
        </form>


        {(studentsList && studentsList.length > 0) && 
            studentsList.map((student, index) => (
                <StudentItem key={index} {...student} student={student} onDelete={deleteHandler} onPersonalInfo={personalInfoHandler} onEdit={editHandler} />
            ))
        }
    </div>
  )
}

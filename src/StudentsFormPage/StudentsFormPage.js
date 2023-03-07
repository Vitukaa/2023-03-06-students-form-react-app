import { useState } from "react"

export default function StudentsFormPage() {
    const [studentsList, setStudentsList] = useState([])
    const [checked, setChecked] = useState(false)
    const hideText = (text) => {
        return '*'.repeat(text.length)
    }


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


    const checkHandler = (event) => {
        const checked = event.target.checked
        const checkedValue = event.target.value
        const checkedName = event.target.name
        setChecked(event.target.checked)
    }


    const createStudentHandler = (event) => {
        event.preventDefault()

        let studentDataObj = {
            id: Math.random(),
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
        // console.log(studentDataObj.interest)
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
                <div>
                    <input type="radio" name="group" id="feu1" value="feu-1" />
                    <label htmlFor="feu1">FEU 1 gr.</label>
                </div>
                <div>
                    <input type="radio" name="group" id="feu2" value="feu-2"/>
                    <label htmlFor="feu2">FEU 2 gr.</label>
                </div>
                <div>
                    <input type="radio" name="group" id="feu3" value="feu-3"/>
                    <label htmlFor="feu3">FEU 3 gr.</label>
                </div>
                <div>
                    <input type="radio" name="group" id="feu4" value="feu-4"/>
                    <label htmlFor="feu4">FEU 4 gr.</label>
                </div>
                <div>
                    <input type="radio" name="group" id="feu5" value="feu-5"/>
                    <label htmlFor="feu5">FEU 5 gr.</label>
                </div>
            </fieldset>
            <fieldset>
            <legend>Choose IT language interests:</legend>
            <div>
                <input type="checkbox" name="interest" id="javascript" value="JavaScript" onChange={checkHandler} checked={checked}/>
                <label htmlFor="javascript" >JavaScript</label>
            </div>
            <div>
                <input type="checkbox" name="interest" id="ruby" value="Ruby" onChange={checkHandler} checked={checked}/>
                <label htmlFor="ruby">Ruby</label>
            </div>
            <div>
                <input type="checkbox" name="interest" id="php" value="PHP" onChange={checkHandler} checked={checked}/>
                <label htmlFor="php">PHP</label>
            </div>
            <div>
                <input type="checkbox" name="interest" id="c#" value="C#" onChange={checkHandler} checked={checked}/>
                <label htmlFor="c#">C#</label>
            </div>
            <div>
                <input type="checkbox" name="interest" id="java" value="Java" onChange={checkHandler} checked={checked}/>
                <label htmlFor="java">Java</label>
            </div>
        </fieldset>
            <input type='submit' value='Create student'></input>
        </form>
        {(studentsList && studentsList.length > 0) && studentsList.map((student, index) => (
            <div key={index} className='student-output'>
                <h1>{student.name} {student.surname} ({student.age})</h1>
                <h3>IT knowledge: {student.knowledge}</h3>
                <h3>Group: {student.group}</h3>
                <h4>Interests:{student.interest}</h4>
                <p>Contacts info:</p>
                <ul>
                    {student.isHidden ? (
                        <>
                            <li>Phone: {hideText(student.phone)}</li>
                            <li>Email: {hideText(student.email)}</li>
                        </>
                    ) : (
                        <>
                            <li>Phone: {student.phone}</li>
                            <li>Email: {student.email}</li>
                        </>
                    )
                    }
                </ul>
                <button onClick={() => deleteHandler(student.id)}>Delete</button>
                <button onClick={() => personalInfoHandler(student.id)}>Show personal info</button>
            </div>

        )
        

        )



}
    </div>
    

  )
}

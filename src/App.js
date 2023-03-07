import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import StudentsFormPage from './StudentsFormPage/StudentsFormPage';



function App() {

  return (
    <div className="App">
      
      <Router>
        <Routes>
        <Route path='/' element={
          <ul>
            <li>
              <Link to='/students-form'>Students form</Link>
            </li>
          </ul>
        }
        />
        <Route path='/students-form' element={<StudentsFormPage />} />

        </Routes>

      </Router>


    </div>
  );
}

export default App;

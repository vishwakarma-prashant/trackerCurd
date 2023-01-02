import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle"

import { BrowserRouter as Router , Switch , Route ,Link, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.component/Navbar';
import ExerciseList from './components/ExerciseList.component/ExerciseList.jsx';
// import EditExercise from './components/EditExercise.component/EditExercise.jsx';
import CreateExercise from './components/CreateExercise.component/CreateExercise.jsx';
import CreateUser from './components/Create.User.component/CreateUser.jsx';





const App = ()=> {
  return (
    <Router >
      <div className='container'>

      <Navbar/>
      <br/><Routes>

      <Route path='/' exact element={<ExerciseList/>}/>
      {/* <Route path='/edit/:id' element={<EditExercise/>}/> */}
      <Route path="/create" element={<CreateExercise/>}/>
      <Route path='/user' element ={<CreateUser/>}/>
      </Routes>
      </div>
  
    </Router>
  );
}

export default App;

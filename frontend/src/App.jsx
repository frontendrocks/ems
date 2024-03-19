import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import ListEmployee from './components/ListEmployee';
import EditEmployee from './components/EditEmployee';
import Home from './components/Home';
import './output.css';


const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/employeeList' element={<ListEmployee/>} />
        <Route path='/addemployee' element={<AddEmployee/>} />
        <Route path='/editemployee/:id' element={<EditEmployee/>} />
     </Routes>
  )
}

export default App

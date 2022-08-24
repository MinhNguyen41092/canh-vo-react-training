import React from 'react';
import { useContext } from 'react'
import Context from '../store/Context';
import Navbar from '../components/Navbar/navbar';
import AllUser from './allUser';
import AddUser from './addUser';
import EditUser from './editUser';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

function Dashboard() {
  const themeContext = useContext(Context)

  return (
    <BrowserRouter>
      <div className={`dashboard ${themeContext.theme}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllUser />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>  
  )
}

export default Dashboard
import React from 'react';
import { useContext } from 'react'
import Context from '../store/Context';
import Navbar from '../components/navbar/navbar';
import AllUser from './allUser';
import AddUser from './addUser';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

function Dashboard() {
  const context = useContext(Context)

  return (
    <BrowserRouter>
      <div className={`dashboard ${context.theme}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllUser />} />
          <Route path="/add" element={<AddUser />} />
        </Routes>
      </div>
    </BrowserRouter>  
  )
}

export default Dashboard
import React, { useContext } from "react"

// Context
import Context from "../store/Context"

// Components
import Navbar from "../components/Navbar/Navbar"
import AllUser from "./AllUser"
import AddUser from "./AddUser"
import EditUser from "./EditUser"

// Router
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
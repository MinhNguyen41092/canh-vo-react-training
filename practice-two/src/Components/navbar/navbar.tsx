import React, { useContext } from "react"

// Link
import { NavLink } from "react-router-dom"

// Components
import Switch from "react-switch"

// Context
import Context from "../../store/Context"

// Enum
import { Theme } from "../../enums/theme"

function Navbar() {
  const themeContext = useContext(Context)
  const {Dark} = Theme

  return(
    <nav className="container nav-bar">
      <div className="nav-bar-left">
        <NavLink to="/" className="nav-link"><h1 className="nav-logo">User Management</h1></NavLink>
        <NavLink to="/add" className="nav-link">Add User</NavLink>
      </div>

      <div className=" nav-bar-right">
        <label htmlFor="theme-switch">Dark Mode</label>
        <Switch 
          checked={themeContext.theme === Dark} 
          onChange={themeContext.toggleTheme}
          onColor="#86d3ff"
          uncheckedIcon={false}
          checkedIcon={false}
          height={20}
          width={40}  
          id="theme-switch"
        />
      </div>
    </nav>
  ) 
}

export default Navbar
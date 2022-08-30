import React, { useEffect, useState } from "react"

// Services
import { getUsers } from "../services/action"

// Components
import UserTable from "../components/Table/UserTable"
import Loading from "../components/Loading/Loading"
import Label from "../components/Label/Label"
import Input from "../components/Input/Input"

// Interface
import { IUser } from "../interfaces/IUser"

const initUsers: IUser[] = []

function AllUser() { 
  const [users, setUsers] = useState(initUsers)
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState("")
  const [error, setError] = useState('')

  useEffect(() => {
    getUsersDetails()
  }, [])

  // Get all users
  const getUsersDetails = async () => {
    setLoading(true)
    try {
      const data = await getUsers()
      setUsers(data)
      setError('')
  } catch {
    setError('Error while calling api')
  }
    setLoading(false)
  }
 
  // Handle search input
  const handleSearchInput = (e: any) => {
    setQuery(e.target.value)
  }

  return (
    <>
      <div className="container">
        <Label 
          htmlFor="search-input"
          text="Search User"
          className="search-label"
        />
        <Input 
          type="text"
          id="search-input"
          placeholder="Search..."
          name="search"
          className="search-input"
          handleInputChange={handleSearchInput}
        />
      </div>

      <p className="error-msg">{error}</p>

      { loading && <Loading /> }
      
      <UserTable 
          users={users}
          query={query}
          getUsersDetails={getUsersDetails}
        /> 
    </>
  )
}

export default AllUser
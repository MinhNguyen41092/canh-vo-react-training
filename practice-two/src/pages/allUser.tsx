import React, { useEffect, useState } from "react"

// Services
import { getUsers, deleteUser } from "../services/action"

// Navigate
import { useNavigate } from "react-router-dom"

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
  const [display, setDisplay] = useState(false)
  const [id, setId] = useState(0)
  const [error, setError] = useState('')

  const navigate = useNavigate();

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

  // Handle edit user 
  const handleEditUser = (e: any, userId: number) => {
    navigate(`/edit/${userId}`)
  }

  // Close popup
  const handleHidePopupDelete = () => {
    setDisplay(false)
  }

  // Show popup
  const handleShowPopupDelete = (e: any, userId: number) => {
    setDisplay(true)
    setId(userId)
  }

  // Handle delete user
  const handleDeleteUser = async (e: any, userId: number) => {
    setLoading(true)
    try {
      await deleteUser(userId)
      getUsersDetails()
      setError('')
      setDisplay(false)
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
          loading={loading}
          display={display}
          id={id}
          handleHidePopupDelete={handleHidePopupDelete}
          handleShowPopupDelete={handleShowPopupDelete}
          handleEditUser={handleEditUser}
          handleDeleteUser={handleDeleteUser}
          error={error}
        /> 
    </>
  )
}

export default AllUser
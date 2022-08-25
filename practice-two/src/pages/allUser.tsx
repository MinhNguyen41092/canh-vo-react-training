import React, { useEffect, useState } from 'react'
import { getUsers, deleteUser } from '../services/action'
import { useNavigate } from "react-router-dom";
import UserTable from '../components/Table/userTable'
import Loading from '../components/Loading/loading'
import Label from '../components/Label/label';
import Input from '../components/Input/input';

function AllUser() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState("")
  const [display, setDisplay] = useState(false)
  const [id, setId] = useState(0)

  const navigate = useNavigate();

  useEffect(() => {
    getUsersDetails()
  }, [])

  // Get all users
  const getUsersDetails = async () => {
    setLoading(true)
    const res = await getUsers()
    setUsers(res?.data)
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
    await deleteUser(userId)
    getUsersDetails()
    setLoading(false)
    setDisplay(false)
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
          handleInput={handleSearchInput}
        />
      </div>

      {
        loading && <Loading />
      }

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
        /> 
    </>
  )
}

export default AllUser
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

  const navigate = useNavigate();

  useEffect(() => {
    getUsersDetails()
  }, [])

  // Get all users
  const getUsersDetails = async () => {
    const res = await getUsers()
    setUsers(res?.data)
    setLoading(true)
  }

  // Handle edit user 
  const handleEditUser = (e: any, userId: number) => {
    navigate(`/edit/${userId}`)
  }

  // Handle delete user
  const handleDeleteUser = async (e: any, userId: number) => {
    await deleteUser(userId)
    getUsersDetails()
  }

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

      {loading ? <UserTable 
        users={users}
        query={query} 
        handleEditUser={handleEditUser}
        handleDeleteUser={handleDeleteUser}
      /> 
      : <Loading />}
    </>
  )
}

export default AllUser
import React, { useEffect, useState } from 'react'
import { getUsers, deleteUser } from '../services/action'
import { useNavigate } from "react-router-dom";
import UserTable from '../components/Table/userTable'
import Loading from '../components/Loading/loading'

function AllUser() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

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

  return (
    <>
      {loading ? <UserTable 
        users = {users} 
        handleEditUser={handleEditUser}
        handleDeleteUser={handleDeleteUser}
      /> 
      : <Loading />}
    </>
  )
}

export default AllUser
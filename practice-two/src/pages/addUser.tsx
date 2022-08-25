import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../services/action'
import UserForm from '../components/Form/userForm'
import Loading from '../components/Loading/loading'

function AddUser() {
  const initUserValue = {
    "name": "",
    "email": "",
    "gender": "Male",
    "status": "Inactive",
    "avatar": ""
  }

  const navigate = useNavigate();

  const [user, setUser] = useState(initUserValue)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Get value input
  const handleValueChange = (key: string, value: string) => {
    setUser({...user, [key]: value})
  }

  // Handle add user
  const handleAddUser = async (e: any) => {
    e.preventDefault()
    if(!!user.name && !!user.email && !!user.gender && !!user.avatar) {
      setLoading(true)
      setError('')
      await addUser(user)
      navigate('/')
    } else setError('Please complete all fields correctly')
  }

  return (
    <div className="container add-user">
      {loading && <Loading />}
      <h2 className="add-user-heading">Add User</h2>
      <UserForm 
        handleValueChange = {handleValueChange}
        handleAddUser = {handleAddUser}
        error={error}
        gender={user.gender}
        status={user.status}
        btnText="Add User"
      />
    </div>
  )
}

export default AddUser
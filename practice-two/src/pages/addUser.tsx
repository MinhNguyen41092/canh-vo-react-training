import React, { useState } from 'react'
import UserForm from '../components/Form/userForm'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../services/action'

function AddUser() {
  const initUserValue = {
    "name": "",
    "email": "",
    "gender": "Male",
    "status": "Inactive",
    "avatar": ""
  }

  const [user, setUser] = useState(initUserValue)
  const navigate = useNavigate();
  const [error, setError] = useState('')

  const handleValueChange = (key: string, value: string) => {
    setUser({...user, [key]: value})
  }

  const handleAddUser = async (e: any) => {
    e.preventDefault()
    if(!!user.name && !!user.email && !!user.gender && !!user.avatar) {
      await addUser(user)
      navigate('/')
    } else setError('Please complete all fields correctly')
  }

  return (
    <div className="container add-user">
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
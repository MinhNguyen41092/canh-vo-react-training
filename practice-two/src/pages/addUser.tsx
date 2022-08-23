import React, { useState } from 'react'
import UserForm from '../components/Form/userForm'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../services/action'

const initUser = {
  "name": "",
  "email": "",
  "gender": "",
  "status": "inactive",
  "avatar": ""
}

function AddUser() {

  const [user, setUser] = useState(initUser)
  const navigate = useNavigate();

  const handleValueChange = (key: string, value: string) => {
    setUser({...user, [key]: value})
  }

  const handleAddUser = async (e: any) => {
    e.preventDefault()
    await addUser(user)
    navigate('/')
  }

  return (
    <div className="container add-user">
      <h2 className="add-user-heading">Add User</h2>
      <UserForm 
        handleValueChange = {handleValueChange}
        handleAddUser = {handleAddUser}
      />
    </div>
  )
}

export default AddUser
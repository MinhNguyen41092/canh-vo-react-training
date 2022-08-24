import React, { useEffect, useState } from 'react'
import UserForm from '../components/Form/userForm'
import { useNavigate, useParams } from 'react-router-dom'
import { getUser, editUser } from '../services/action'

function EditUser() {
  const initUserValue = {
    "name": "",
    "email": "",
    "gender": "Male",
    "status": "Inactive",
    "avatar": ""
  }

  const [user, setUser] = useState(initUserValue)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getUserData()
  }, [])

  // Get user selected
  const getUserData = async () => {
    const res = await getUser(id)
    setUser(res?.data)
  }

  const handleValueChange = (key: string, value: string) => {
    setUser({...user, [key]: value})
  }

  const handleAddUser = async (e: any) => {
    e.preventDefault()
    if(!!user.name && !!user.email && !!user.gender && !!user.avatar) {
      await editUser(user, id)
      navigate('/')
    } else setError('Please complete all fields correctly')
  }

  return (
    <div className="container add-user">
      <h2 className="add-user-heading">Edit User</h2>
      <UserForm 
        handleValueChange = {handleValueChange}
        handleAddUser = {handleAddUser}
        error={error}
        btnText="Save"
        name={user.name}
        email={user.email}
        gender={user.gender}
        status={user.status}
        userAvatar={user.avatar}
      />
    </div>
  )
}

export default EditUser
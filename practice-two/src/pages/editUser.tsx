import React, { useEffect, useState } from "react"

// Router
import { useNavigate, useParams } from "react-router-dom"

// Services
import { getUser, editUser } from "../services/action"

// Components
import UserForm from "../components/Form/UserForm"
import Loading from "../components/Loading/Loading"

const initUserValue = {
  "name": "",
  "email": "",
  "gender": "",
  "status": "",
  "avatar": ""
}

function EditUser() {
  const [user, setUser] = useState(initUserValue)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getUserData()
  }, [])

  // Get user selected
  const getUserData = async () => {
    setLoading(true)
    try {
      const user = await getUser(id)
      setUser(user)
      setError('')
    } catch {
      setError('Error while calling api')
    }
    setLoading(false)
  }

  // Get value input
  const handleValueChange = (key: string, value: string) => {
    setUser({...user, [key]: value})
  }

  // Handle edit user
  const handleEditUser = async (e: any) => {
    e.preventDefault()
    if(!!user.name && !!user.email && !!user.gender && !!user.avatar) {
      setLoading(true)
      setError('')
      try {
        await editUser(user, id)
        navigate('/')
        setError('')
      } catch {
        setError('Error while calling api')
      }
    } else setError('Please complete all fields correctly')
  }

  return (
    <div className="container add-user">
      <h2 className="add-user-heading">Edit User</h2>
      {loading ? (<Loading />) : (
        <UserForm 
          handleValueChange={handleValueChange}
          handleAddUser={handleEditUser}
          error={error}
          btnText="Save"
          name={user.name}
          email={user.email}
          gender={user.gender}
          status={user.status}
          userAvatar={user.avatar}
        />
      )}
    </div>
  )
}

export default EditUser
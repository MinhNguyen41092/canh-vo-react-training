import React, { useEffect, useState } from 'react'
import { getUsers } from '../services/action'

function AllUser() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsersDetails()
  }, [])

  const getUsersDetails = async () => {
    const res = await getUsers()
    setUsers(res?.data)
  }

  return (
    <table>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Status</th>
          <th>Avatar</th>
          <th>Action</th>
        </tr>
        {
            users.map((user: any) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.status}</td>
                <td><img src={user.avatar} alt="user avatar" /></td>
              </tr>
            ))
          }
      </tbody>
    </table>
  )
}

export default AllUser
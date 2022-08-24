import React from "react";
import ActionButton from "../Button/actionButton";

function UserTable(props: any) {
  const {users, handleEditUser, handleDeleteUser} = props

  return (
    <table className="container user-table">
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
                <td><img src={user.avatar} className="user-table-avatar" alt="user avatar" /></td>
                <td className="td-action">
                  <ActionButton 
                    text="Edit" 
                    className="edit-btn"
                    userId={user.id}
                    handleButton={handleEditUser}
                    
                  />
                  <ActionButton 
                    text="Delete" 
                    className="delete-btn"
                    userId={user.id}
                    handleButton={handleDeleteUser}
                  />
                </td>
              </tr>
            ))
          }
      </tbody>
    </table>
  )
}

export default UserTable
import React from "react"

// Components
import ActionButton from "../Button/ActionButton"
import ConfirmPopup from "../Popup/ConfirmPopup"

interface User {
  id: number
  name: string
  email: string
  gender: string
  status: string
  avatar: string
}

interface UserTableProps {
  users: Array<User>
  query: string
  loading: boolean
  display: boolean
  id: number
  handleHidePopupDelete(): void
  handleShowPopupDelete(e: any, userId: number): void
  handleEditUser(e: any, userId: number): void
  handleDeleteUser(e: any, userId: number): void
  error: string
}

function UserTable(props: UserTableProps) { 

  const {
    users,
    query,
    loading,
    display,
    id, 
    handleEditUser, 
    handleDeleteUser, 
    handleHidePopupDelete, 
    handleShowPopupDelete,
    error
  } = props
  
  return (
    <>
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
              users.filter((user: User) => user.name.toLowerCase().includes(query))
              .map((user: User) => (
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
                      handleClick={handleEditUser}
                      
                    />
                    <ActionButton 
                      text="Delete" 
                      className="delete-btn"
                      userId={user.id}
                      handleClick={handleShowPopupDelete}
                    />
                  </td>
                </tr>
              ))
            }
        </tbody>
      </table>

      { display && ( 
        <ConfirmPopup 
          heading="Confirm Delete"
          text="Do you want to delete this User?"
          loading={loading}
          id={id}
          error={error}
          handleHidePopupDelete={handleHidePopupDelete}
          handleDeleteUser={handleDeleteUser}
        /> 
      )}
    </>
  )
}

export default UserTable
import React, { useState } from "react"

// Interface
import { IUser } from "../../interfaces/IUser"

// Router
import { NavLink } from "react-router-dom"

// Components
import ActionButton from "../Button/ActionButton"
import ConfirmPopup from "../Popup/ConfirmPopup"

interface UserTableProps {
  users: IUser[]
  query: string
  getUsersDetails(): void
}

function UserTable(props: UserTableProps) { 
  const [display, setDisplay] = useState(false)

   // Show popup
  const handleShowPopupDelete = () => {
    setDisplay(true)
  }

  // Close popup
  const handleHidePopupDelete = () => {
    setDisplay(false)
  }

  const {
    users,
    query,
    getUsersDetails
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
              users.filter((user: IUser) => user.name.toLowerCase().includes(query))
              .map((user: IUser) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.status}</td>
                  <td><img src={user.avatar} className="user-table-avatar" alt="user avatar" /></td>
                  <td className="td-action">
                    <NavLink to={`/edit/${user.id}`}>
                    <ActionButton 
                      text="Edit" 
                      className="edit-btn"
                    />
                    </NavLink>

                    <ActionButton 
                      text="Delete" 
                      className="delete-btn"
                      handleClick={handleShowPopupDelete}
                    />
                    { display && ( 
                      <ConfirmPopup 
                        heading="Confirm Delete"
                        text="Do you want to delete this User?"
                        id={user.id}
                        handleHidePopupDelete={handleHidePopupDelete}
                        getUsersDetails={getUsersDetails}
                      /> 
                    )}
                  </td>
                </tr>
              ))
            }
        </tbody>
      </table>
    </>
  )
}

export default UserTable